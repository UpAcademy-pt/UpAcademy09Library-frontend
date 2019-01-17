import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, TypeaheadMatch } from 'ngx-bootstrap';
import { Catalog } from 'src/app/shared/models';
import { ReplaySubject } from 'rxjs';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  // variables
  modalRef: BsModalRef;
  catalog: Catalog = new Catalog();
  livrosInput: any[];
  dataSource: ReplaySubject<any> = new ReplaySubject<any>();
  typeaheadSelected = false;
  typeaheadNoResults: boolean;

  constructor(private modalService: BsModalService, private dataService: DataService) { }

  ngOnInit() { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this.dataService.createCatalog(this.catalog);
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.typeaheadSelected = true;
    console.log('Selected value: ', e);
    this.catalog.description = e.item.description;
    // this.catalog.author = e.item.authors;
    this.catalog.author = e.item.authors[0];
    this.catalog.topic = e.item.categories[0];
    if (e.item.industryIdentifiers[1]) {
      this.catalog.isbn = e.item.industryIdentifiers[1].identifier;
    }
  }

  onClose() {
    this.catalog.title = '';
    this.catalog.description = '';
    this.catalog.author = '';
    this.catalog.topic = '';
    this.catalog.location = '';
    this.catalog.isbn = '';
  }

  public getBookInfoGoogleApi() {
    console.log(this.catalog.title);
    console.log(this.typeaheadSelected);

    this.dataService.getBookInfoGogleApi(this.catalog.title).subscribe(
      (res: any) => {
        const bookList = [];
        for (let i = 0; i < res.items.length; i++) {
          console.log('ola');
          bookList.push(res.items[i].volumeInfo);
        }
        this.livrosInput = bookList;
        this.dataSource.next(bookList);
      },
      error => {
        console.error(error);
      });
  }
}
