import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-admin',
  templateUrl: './catalog-admin.component.html',
  styleUrls: ['./catalog-admin.component.css']
})
export class CatalogAdminComponent implements OnInit {

  @Input() catalog$: any;

  // pagination
  p = 1;

  constructor(public router: Router) { }

  ngOnInit() { }

  clickItem(item) {
    this.router.navigate(['bookadmin', item.id]);
  }

  changeImg(image: any) {
    image.src = '/assets/bookFull.png';
  }

}
