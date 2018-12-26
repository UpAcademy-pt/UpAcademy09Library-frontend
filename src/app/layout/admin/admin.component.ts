import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   //observable
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(private dataService: DataService) {
    this.catalog$ = this.dataService.catalog$;
   }

  ngOnInit() {
  }
 
}
