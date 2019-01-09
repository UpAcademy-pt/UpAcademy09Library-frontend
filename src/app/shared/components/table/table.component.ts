import { Component, OnInit, Input} from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],


})
export class TableComponent implements OnInit {

  @Input() header: any;
  @Input() catalog$: any;
  @Input() theme = 'table-dark';
  @Input() isBook = true;

  // pagination
  p: number = 1;

  // filter var
  selectedTypeSearch: string = 'keyword';
  searchableList: string;

  constructor(public router: Router, private dataService: DataService) { }

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
