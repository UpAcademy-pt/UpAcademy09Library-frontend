import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataService } from 'src/app/shared/services';
import { Catalog } from 'src/app/shared/models';
import { ReplaySubject } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  modalRef: BsModalRef;
  catalog: Catalog = new Catalog();
  livrosInput: any[];
  dataSource: ReplaySubject<any> = new ReplaySubject<any>();
  typeaheadSelected: boolean = false;
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
    this.catalog.author = e.item.authors;
    this.catalog.topic = e.item.categories;
    if (e.item.industryIdentifiers[1])
      this.catalog.isbn = e.item.industryIdentifiers[1].identifier;
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
          var bookList = [];
          for (let i = 0; i < res.items.length; i++) {
            console.log("ola");
            bookList.push(res.items[i].volumeInfo)
          }
          this.livrosInput = bookList
          this.dataSource.next(bookList);
        },
        error => {
          console.error(error);
        });
  }


  public clickItem() {

  }
  //POR AQUI FUNÇÃO QUE PROCURE OS DADOS DO LIVRO PARA O QUAL SE INSERIU o TITULO
}
