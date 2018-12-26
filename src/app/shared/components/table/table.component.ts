import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input()  header: any;
  @Input()  catalog$: any;
  @Input()  theme = 'table-dark';
  

  constructor(public router: Router) { }

  ngOnInit() {
  }
}


