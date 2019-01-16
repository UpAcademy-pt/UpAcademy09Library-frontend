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

  @Input() user$: any;

  // pagination
  page = 1;

  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit() { }

  clickItem(item) {
    this.router.navigate(['userdetailadmin', item.id]);
  }

}





