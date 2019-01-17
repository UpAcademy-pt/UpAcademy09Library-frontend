import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  // Injection
  @Input() user$: any;

  // pagination
  page = 1;

  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit() { }

  clickItem(item) {
    this.router.navigate(['useradmin', item.id]);
  }


}
