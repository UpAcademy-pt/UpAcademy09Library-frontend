import { Component, OnInit } from '@angular/core';
import { DataService, AcountApiService } from 'src/app/shared';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  // public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  // public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  user: User = new User();

  account: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      params => {
        
        this.user = this.dataService.getUserById(Number(params.id));
        console.log(this.user);
      });
  }

  ngOnInit() {
  
  }

}
