import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';
import { User } from '../../models';


@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})


export class AdminManagementComponent implements OnInit {

  @Input() headerUsers: any;
  @Input() user$: any;
  @Input() theme = 'table-dark';
  // filter var
  selectedTypeSearch = 'email';
  searchableListUser: string;

  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit() { }

  clickItem(item) {
    this.router.navigate(['userdetailadmin', item.id]);
  }

  // search type
  selectChangeHandler(event: any) {
    // search selected
    this.selectedTypeSearch = event.target.value;
    // search Type to FilterPipe
    return this.searchableListUser = this.selectedTypeSearch;
  }



}





