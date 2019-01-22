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
 
  public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  user: User = new User();
  id: string;
  history: any;
  account: any;
  password: string = '';
  confirmPassword: string;
  alterouDados: Boolean;
  submitedFormDados: Boolean;
  alterouPassword: Boolean;
  submitedFormPassword: Boolean;
  historyUser: Object;
  booksInUser: any;
  fav;
  // pagination
  page = 1;

  date: Date = new Date();
  
  max = 8;
  showWarning: boolean;
  dynamic = 7;
  type: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.history = dataService.history$;
    this.history.subscribe((a) => console.log(a));

    this.route.params.subscribe(
      params => {
        this.user = this.dataService.getUserById(Number(params.id));


      });

    // this.user = this.dataService.getUserById(Number(this.id));
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getUserHistoryService(Number(this.id));
    this.fav = this.dataService.getAllFavoritesServices(Number(this.id));
    
    this.booksInUser = this.dataService.getBookWithUserService(Number(this.id));
 

  }
  onSubmit() {

    var result = this.dataService.updateUserServices(Number(this.id), this.user).subscribe(
      (res) => {
        console.log('OK');
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
      (res) => {
        console.log('OK');
        this.alterouPassword = true;
        this.submitedFormPassword = true;
      },
      error => {
        console.error(error);
        this.alterouPassword = false;
        this.submitedFormPassword = true;
      });
  }

  dataEntrega(input: any){
    let res = new Date(input)
     return res.setDate(res.getDate() + 8); 
  }

  diasEntrega(input: any){
   
    let res =this.dataEntrega(input);
  
    const dayNow = new Date().getTime();
 
    return  Math.round(8 - (res - dayNow) / 86400000);
  }


  delFav(entrada) {

    let user2 = Number(this.user.id);
    let bookId = entrada.id;
    this.dataService.removeFavoritesServices(user2, entrada).subscribe(

      (res) => {
              console.log('OK');
      },
      error => { console.error(error)});
    console.log(user2);


  }
}
