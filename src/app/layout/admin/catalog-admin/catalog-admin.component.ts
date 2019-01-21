import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-catalog-admin',
  templateUrl: './catalog-admin.component.html',
  styleUrls: ['./catalog-admin.component.css']
})
export class CatalogAdminComponent implements OnInit {

  @Input() catalog$: any;

  // pagination
  p = 1;

  constructor(public router: Router, private dataService: DataService) {}

  ngOnInit() {}


  clickItem(book) {
    this.router.navigate(['bookadmin', book.id]);
  }

  changeImg(image: any) {
    image.src = '/assets/bookFull.png';
  }

}
