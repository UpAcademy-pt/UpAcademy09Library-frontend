import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from 'src/app/shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // filter var
  selectedTypeSearchCatalog = 'keyword';
  selectedTypeSearchUser = 'email';
  selectedTypeSearchOutput = 'Palavra-Chave';
  input: any;

  // observable
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  public search$: ReplaySubject<any[]> = new ReplaySubject(1);
  public headers = ['Name', 'E-mail', 'NIP'];
  public searchCatalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  public searchUser$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(
    private dataService: DataService
  ) {
    this.catalog$ = this.dataService.catalog$;
    this.searchCatalog$ = this.dataService.catalog$;
    this.user$ = this.dataService.user$;
    this.searchUser$ = this.dataService.user$;
  }

  ngOnInit() {}

  onChangeInput() {
    this.searchCatalog$ = this.dataService.queryCatalog(this.selectedTypeSearchCatalog, this.input);
    this.searchUser$ = this.dataService.queryUser(this.selectedTypeSearchUser, this.input);
  }
  // search type
  selectChangeHandler(event: any) {
    this.selectedTypeSearchCatalog = event.target.value;
    this.selectedTypeSearchUser = event.target.value;
  }

}
