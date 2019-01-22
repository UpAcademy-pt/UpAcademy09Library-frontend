import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.css']
})
export class BookAdminComponent implements OnInit {

  // variables
  catalog$: any;
  catalog: any;
  quantity: any;
  max = 5;
  rate = 3;
  isReadonly = false;

  constructor(private _location: Location, private dataService: DataService, private route: ActivatedRoute) {

    this.route.params.subscribe(
      params => {
        this.catalog$ = this.dataService.getCatalogId(Number(params.id));
      });

  }

  ngOnInit() {
    this.catalog$.subscribe((res: any) => {
      this.catalog = res;
      console.log(this.catalog.isbn);
      this.getQuantity(this.catalog.isbn);
    });
    
  }

  getQuantity(catalog) {
    this.dataService.getCatalogIsbn(catalog);
    // .subscribe((res: any) => {
    //   this.quantity = res;
    //   console.log(res);
    // });
  }

  // delete book
  deleteCatalog(id) {
    console.log(id);
    this.dataService.deleteCatalogService(id);
    console.log('delete in table ok');
    this.cancel();
  }

  // falta por a ir para a última tab
  cancel() {
    this._location.back(); // <-- go back to previous location on cancel
  }

}
