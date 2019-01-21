import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, CatalogApiService } from 'src/app/shared';
import { Catalog } from 'src/app/shared/models';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
 catalog:any;


 max: number = 5;
 rate: number = 3;
 isReadonly: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private bookApi: CatalogApiService
  ) {
    this.route.params.subscribe(
      params => {
        this.catalog = this.dataService.getCatalogIsbn((params.isbn));
        console.log(params.isbn);
        console.log(this.catalog);
      });
  }

  ngOnInit() {}





}
