import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  //usamos isto para definir que a app começa na homepage
  constructor(
    private router: Router) {
    // this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
