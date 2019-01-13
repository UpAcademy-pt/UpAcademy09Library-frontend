import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TabDirective, idLocale } from 'ngx-bootstrap';

@Component({
  selector: 'app-book-details-admin',
  templateUrl: './book-details-admin.component.html',
  styleUrls: ['./book-details-admin.component.css']
})
export class BookDetailsAdminComponent implements OnInit {
  catalog: any;
  constructor(private _location: Location, private dataService: DataService, private route: ActivatedRoute) {

    this.route.params.subscribe(
      params => {
        this.catalog = this.dataService.getCatalogById(Number(params.id));
        console.log(this.catalog);
      });
  }

  ngOnInit() {
  }

   // delete
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
