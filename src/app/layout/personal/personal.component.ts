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
  public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  user: User = new User();
   id:string;
  account: any;
  password:string='';
  confirmPassword:string;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      params => {
        this.user = this.dataService.getUserById(Number(params.id));
        console.log(this.user);
      });
    
    // this.user = this.dataService.getUserById(Number(this.id));
  }

  ngOnInit() {
this.id=this.route.snapshot.paramMap.get('id');
  
   console.log(this.user);
  console.log(this.id);
 
  }
onSubmit(){
  this.dataService.updateUserServices(Number(this.id), this.user);
}

NewPass(){
 this.user.password=this.password;
 this.dataService.updateUserServices(Number(this.id), this.user);
}
}
