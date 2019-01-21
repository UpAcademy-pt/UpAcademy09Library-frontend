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

  constructor(private _location: Location, private dataService: DataService, private route: ActivatedRoute) {

    this.route.params.subscribe(
      params => {
        this.catalog$ = this.dataService.getCatalogIdService(Number(params.id));
      });
  }

  ngOnInit() {
    this.catalog$.subscribe((res: any) => {
      this.catalog = res;
      console.log(this.catalog);
    });
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
