import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.component.html',
  styleUrls: ['./history-admin.component.css']
})
export class HistoryAdminComponent implements OnInit {

  @Input() history$: any;
  history: any;

  constructor(public router: Router) { }

  ngOnInit() {
    this.history = this.history$;
    return this.history;
  }

}
