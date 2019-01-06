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

  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  public changePrivileges(id) {
    console.log(id);
    this.dataService.changePrivilegesServices(id);
  }

  public disable(id) {
    this.dataService.disableServices(id);
  }

  public reactivate(id) {
    this.dataService.reactivateServices(id);
  }

}





