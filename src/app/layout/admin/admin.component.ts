import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService, CatalogApiService } from 'src/app/shared';
import { Catalog } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   //observable
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(private dataService: DataService, private catalogApiService: CatalogApiService) {
    this.catalog$ = this.dataService.catalog$;
   }

  ngOnInit() {
  }

  // deleteCatalog(catalog$: Catalog){

  //   this.catalogApiService.deleteBook(catalog$);
  //   .subscribe(data => {  
  //     this.catalog$ = this.catalog$.filter(u => u !== catalog$);  
  //   }) 
  // }

  // eleteBook(books: Book): void {  
  //   this.apiService.deleteBooks(books.id)  
  //     .subscribe(data => {  
  //       this.books = this.books.filter(u => u !== books);  
  //     })  
  // } 
  

}
