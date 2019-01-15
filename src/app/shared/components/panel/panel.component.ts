import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService, AcountApiService } from '../../services';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { User, History } from '../../models';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  public history$: ReplaySubject<any[]> = new ReplaySubject(1);
  user: User = new User();
  userid: string;
  history: History = new History();
  livrosIguais;
  set = false;
  selR = false;


  // filter var
  selectedTypeSearch: string = '';
  searchableList: string;
  favoritos: any[] = []
  constructor(
    private dataservice: DataService,
    private acountApi: AcountApiService,
    private router: Router
  ) {


    this.catalog$ = this.dataservice.catalog$;
  }

  ngOnInit() {
    this.updateData();
    this.updateUser();
    this.userid = this.acountApi.getCurrentId();
    this.acountApi.getAllFavourites(+this.userid).subscribe((favoritos: any[]) => {
      this.favoritos = favoritos;
    }, (error) => {
      console.log(error);

    })

    this.catalog$.subscribe((a)=> console.log(a));
  }

  updateData() {
    this.dataservice.getCatalog();
  }

  updateUser(){
    this.acountApi.getAllFavourites(+this.userid);
  }

  itemInFav(item) {

    var result = this.favoritos.filter((favorito) => {
      return item.id === favorito.id
    })
    return result.length > 0 ? true : false;
  }

  // public getHighest() {
  //   const highest = {};
  //   this.history.forEach(history => {
  //     highest[history.historyBook.id] = (highest[history.historyBook.id] || 0) + 1;
  //   });
  //   console.log(highest);
  //   return Object.keys(highest);
  // }


  // search type
  selectChangeHandler(event: any) {
    // search selected
    this.selectedTypeSearch = event.target.value;
    // search Type to FilterPipe
    return this.searchableList = this.selectedTypeSearch;
  }

  clickItem(item) {
    this.router.navigate(['bookdetails', item.id]);

  }

  // changeImg(image:any){

  //   image.src='/assets/bookFull.png';


  // }
  //changeImg()
  css() { this.set = true; }
  css2() { this.selR = true; }

  reservar(item) {
    console.log("userId=" + this.userid);
    this.user.id = Number(this.userid);
    console.log(this.user);
    console.log("historybook=" + item.id);
    this.history.historyBook = item;
    this.history.historyUser = this.user;
    console.log(this.history);


    var h = { historyBook: { id: item.id }, historyUser: { id: this.user.id } }
    this.dataservice.reserveBookService(h).subscribe(
      (res) => { 
        this.updateData();
        console.log("OK") 
      },
      error => { console.error(error) });
  };

  cancelarReserva(item) {
    console.log("userId=" + this.userid);
    this.user.id = Number(this.userid);
    console.log(this.user);
    console.log("historybook=" + item.id);
    this.history.historyBook = item;
    this.history.historyUser = this.user;

    console.log(this.history);


    var h = { historyBook: { id: item.id }, historyUser: { id: this.user.id } }
    this.dataservice.cancelReserveBookService(h).subscribe(
      (res) => { this.updateData();
        console.log("OK") },
      error => { console.error(error) });
  };



  addFav(item) {

    var user2 = Number(this.userid);
    var bookId = item.id;
    this.dataservice.addFavoritesServices(user2, bookId).subscribe(
      (res) => {this.updateUser();
         console.log("OK") },
      error => { console.error(error) });

    console.log(this.user);
  }
  delFav(item) {

    var user2 = Number(this.userid);
    var bookId = item.id;
    this.dataservice.removeFavoritesServices(user2, bookId).subscribe(
 
    (res) => {this.updateUser();
         console.log("OK") },
      error => { console.error(error) });
    console.log(user2);


  }


}
