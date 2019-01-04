import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared';
import { Catalog } from 'src/app/shared/models';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
  public catalog: Catalog = new Catalog();

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      params => {
        this.catalog = this.dataService.getCatalogById(Number(params.id));
        console.log(this.catalog);
      });
  }

  ngOnInit() {}





}
