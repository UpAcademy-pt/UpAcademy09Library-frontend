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

  constructor(private dataService: DataService) {
    this.catalog$ = this.dataService.catalog$;
   }

  ngOnInit() {
  }

}
