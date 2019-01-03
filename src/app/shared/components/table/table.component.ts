import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { Catalog } from '../../models';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() header: any;
  @Input() catalog$: any;
  @Input() theme = 'table-dark';
  @Input() isBook = true;

  // filter var
  selectedTypeSearch: string = '';
  searchableList: string;


  constructor(public router: Router, private dataService: DataService) {}

  ngOnInit() { }
  
  
  // delete
  deleteCatalog(id) {
    console.log(id);
    this.dataService.deleteCatalogService(id);
    console.log("delete in table ok")
  }

  // search type
  selectChangeHandler(event: any) {
    // search selected
    this.selectedTypeSearch = event.target.value;
    // search Type to FilterPipe
    return this.searchableList = this.selectedTypeSearch; 
  }
}
