import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, TypeaheadMatch } from 'ngx-bootstrap';
import { Catalog } from 'src/app/shared/models';
import { ReplaySubject } from 'rxjs';
import { DataService } from 'src/app/shared';
import { isNumber } from 'util';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  // variables
  modalRef: BsModalRef;
  catalog: Catalog = new Catalog();
  dataSource: ReplaySubject<any> = new ReplaySubject<any>();
  isbnSource: ReplaySubject<any> = new ReplaySubject<any>();
  typeaheadSelected = false;

  constructor(private modalService: BsModalService, private dataService: DataService) { }

  ngOnInit() { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // Persist the book in Database
  onSubmit(count) {
    let i = 0;
    while (i < count) {
      this.dataService.createCatalog(this.catalog);
      i++;
    }
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.typeaheadSelected = true;
    console.log('Selected value: ', e);
    // Title
    if (e.item.title) {
      this.catalog.title = e.item.title;
    } else { this.catalog.title = 'Não disponível'; }
    // Description
    if (e.item.description) { this.catalog.description = e.item.description; } else { this.catalog.description = 'Não disponível'; }
    // Author
    if (e.item.authors) { this.catalog.author = e.item.authors[0]; } else { this.catalog.author = 'Não disponível'; }
    // Topic
    if (e.item.categories) { this.catalog.topic = e.item.categories[0]; } else { this.catalog.topic = 'Não disponível'; }
    // Average Rating
    if (e.item.averageRating) { this.catalog.rating = e.item.averageRating; } else { this.catalog.rating = 0.0; }
    // CoverBook
    if (e.item.imageLinks.small) {
      this.catalog.photoLink = e.item.imageLinks.small;
    } else if (e.item.imageLinks.thumbnail) {
      this.catalog.photoLink = e.item.imageLinks.thumbnail;
    } else { this.catalog.photoLink = null; }
    // Isbn
    if (e.item.industryIdentifiers[0].identifier) {
      this.catalog.isbn = e.item.industryIdentifiers[0].identifier;
    } else if (e.item.industryIdentifiers[1].identifier) {
      this.catalog.isbn = e.item.industryIdentifiers[1].identifier;
    } else { this.catalog.isbn = e.item.industryIdentifiers[1].type; }
  }

  // Create the book
  onClose() {
    this.catalog.title = '';
    this.catalog.description = '';
    this.catalog.author = '';
    // tslint:disable-next-line:no-unused-expression
    this.catalog.rating;
    this.catalog.topic = '';
    this.catalog.location = '';
    this.catalog.isbn = '';
    this.catalog.photoLink = '';
  }

  /*colocar um debounce, senão a api do google dá 403*/

  // Get from google Api by Title
  public getBookInfoGoogleApi() {
    this.dataService.getBookInfoGoogleApi(this.catalog.title).subscribe(
      (res: any) => {
        const bookList = [];
        for (let i = 0; i < res.items.length; i++) {
          bookList.push(res.items[i].volumeInfo);
        }
        this.dataSource.next(bookList);
      },
      error => {
        console.error(error);
      });
  }

  // Get from google Api by Isbn
  public getBookIsbnGoogleApi() {
    this.dataService.getBookIsbnGoogleApi(this.catalog.isbn).subscribe(
      (res: any) => {
        const bookList = [];
        for (let i = 0; i < res.items.length; i++) {
          bookList.push(res.items[i].volumeInfo);
        }
        this.dataSource.next(bookList);
      },
      error => {
        console.error(error);
      });
  }
  // Get from google Api by Isbn
  public getBookAuthorGoogleApi() {
    this.dataService.getBookAuthorGoogleApi(this.catalog.author).subscribe(
      (res: any) => {
        const bookList = [];
        for (let i = 0; i < res.items.length; i++) {
          bookList.push(res.items[i].volumeInfo);
        }
        this.dataSource.next(bookList);
      },
      error => {
        console.error(error);
      });
  }
}
