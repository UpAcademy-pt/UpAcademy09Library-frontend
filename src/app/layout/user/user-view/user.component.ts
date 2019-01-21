import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //observable
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(
    private dataService: DataService
  ) {
    this.catalog$ = this.dataService.catalog$;
  }
  ngOnInit() {
  }

}
