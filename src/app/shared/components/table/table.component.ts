import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],


})
export class TableComponent implements OnInit {

  @Input() catalog$: any;
  @Input() isBook = true;

  // pagination
  p = 1;

  constructor(public router: Router, private dataService: DataService) { }

  ngOnInit() { }

  clickItem(item) {
    this.router.navigate(['bookdetailsadmin', item.id]);
  }

  changeImg(image: any) {
    image.src = '/assets/bookFull.png';
  }

}
