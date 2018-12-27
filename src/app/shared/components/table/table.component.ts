import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() header: any;
  @Input() catalog$: any;
  @Input() theme = 'table-dark';


  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  // delete
  deleteCatalog(id) {
    console.log(id);
    this.dataService.deleteCatalogService(id);
    console.log("delete in table ok")
}



}
