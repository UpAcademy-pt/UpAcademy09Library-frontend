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
   history:any;
  account: any;
  password:string='';
  confirmPassword:string;
  alterouDados: Boolean;
  submitedFormDados: Boolean;
  alterouPassword: Boolean;
  submitedFormPassword: Boolean;
  historyUser: Object;
  booksInUser:any;
 fav;
   // pagination
   page = 1;


   max: number = 8;
   showWarning: boolean;
   dynamic: number=1;
   type: string;
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.history = dataService.history$;

    this.route.params.subscribe(
      params => {
        this.user = this.dataService.getUserById(Number(params.id));
     
  
      });
     
    // this.user = this.dataService.getUserById(Number(this.id));
  }

  ngOnInit() {
 this.id=this.route.snapshot.paramMap.get('id');
 this.dataService.getUserHistoryService(Number(this.id));
this.fav=this.dataService.getAllFavoritesServices(Number(this.id));
   this.booksInUser=this.dataService.getBookWithUserService(Number(this.id));
  console.log(this.fav);
 
  }
onSubmit(){

  var result = this.dataService.updateUserServices(Number(this.id), this.user).subscribe(
    (res) => { console.log('OK');
    this.alterouDados = true;
    this.submitedFormDados = true;
  },
    error => {
      console.error(error);
      this.alterouDados = false;
      this.submitedFormDados = true;
    });
}

onClose() {
  this.account.password = '';
  this.account.confirmPassword = '';
}

NewPass() {

 this.user.password = this.password;
 this.dataService.updateUserServices(Number(this.id), this.user).subscribe(
  (res) => { console.log('OK');
  this.alterouPassword = true;
  this.submitedFormPassword = true;
},
  error => {
    console.error(error);
    this.alterouPassword = false;
    this.submitedFormPassword = true;
  });
}


}
