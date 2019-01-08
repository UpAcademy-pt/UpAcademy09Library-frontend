import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  // filter var
  selectedTypeSearch: string = '';
  searchableList: string;

  constructor(
    private dataservice: DataService,
    private router: Router
  ) {
    this.catalog$ = this.dataservice.catalog$;
   }

  ngOnInit() {
  }

 // search type
 selectChangeHandler(event: any) {
  // search selected
  this.selectedTypeSearch = event.target.value;
  // search Type to FilterPipe
  return this.searchableList = this.selectedTypeSearch; }

  clickItem(item) {
    this.router.navigate(['bookdetails', item.id]);
  }

  changeImg(image:any){
   
    image.src='/assets/bookFull.png';
  }
}
