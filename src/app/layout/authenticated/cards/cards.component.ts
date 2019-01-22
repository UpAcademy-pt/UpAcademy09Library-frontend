import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AcountApiService } from 'src/app/shared/services/account/account-api.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { User, History } from 'src/app/shared/models';
import { ReplaySubject } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  public history$: ReplaySubject<any[]> = new ReplaySubject(1);
  public searchCatalog$: ReplaySubject<any[]> = new ReplaySubject(1);


  selectedTypeSearchCatalog = 'keyword';

  selectedTypeSearchOutput = 'Palavra-Chave';

  inputCatalog: any;

  user: User = new User();
  userid: string;
  history: History = new History();
  livros: any;
  set = false;
  selR = false;
  livro: any;




  favoritos: any[] = [];

  resModal: BsModalRef;
  constructor(private dataservice: DataService,
    private acountApi: AcountApiService,
    private router: Router,
    private modalService: BsModalService
  ) {

    this.searchCatalog$ = this.dataservice.getCatalogByIsbn();
  }

  ngOnInit() {
    this.updateData();
    this.updateUser();

    this.userid = this.acountApi.getCurrentId();
    this.acountApi.getAllFavourites(+this.userid).subscribe((favoritos: any[]) => {
      this.favoritos = favoritos;
    }, (error) => {
      console.log(error);

    });

    this.searchCatalog$.subscribe((a: any[]) => {
      this.livros = a;
    }, (error) => {
      console.log(error);

    });
  }

  openModal(template: TemplateRef<any>) {
    this.resModal = this.modalService.show(template);
  }


  updateData() {
    this.dataservice.getCatalogByIsbn();
  }

  updateUser() {
    this.acountApi.getAllFavourites(+this.userid);
  }

  itemInFav(item) {

    const result = this.favoritos.filter((favorito) => {
      return item === favorito.isbn;
    });
    return result.length > 0 ? true : false;
  }

  onChangeInputCatalog() {
    this.searchCatalog$ = this.dataservice.queryCatalog(this.selectedTypeSearchCatalog, this.inputCatalog);
    console.log(this.inputCatalog);
    console.log(this.selectedTypeSearchCatalog);
  }

  // search type
  selectChangeHandler(event: any) {
    this.selectedTypeSearchCatalog = event.target.value;

  }
  getBooksSameIsbn(item) {
    let resultAux = [];
    const result = { stateAvailable: [], stateOthers: [] };
    const stateAvailable = [];
    const stateOthers = [];

    resultAux = this.livros.filter((livro) => {
      return item.isbn === livro.isbn;
    });

    resultAux.map((livro) => {
      if (livro.state === 'available') {
        stateAvailable.push(livro);
      } else {
        stateOthers.push(livro);
      }
    });
    result.stateAvailable = stateAvailable;
    result.stateOthers = stateOthers;
    return result;




  }

 reservar(item) {
    console.log('userId=' + this.userid);
    this.user.id = Number(this.userid);
    console.log(this.user);
    console.log('historybook=' + item.id);
    this.history.historyBook = item;
    this.history.historyUser = this.user;
    console.log(this.history);


    const h = { historyBook: { id: item.id }, historyUser: { id: this.user.id } }
    this.dataservice.reserveBookService(h).subscribe(
      (res) => {
        this.updateData();
        console.log('ok')
      },
      error => { console.error(error)});
  };

  cancelarReserva(item) {
    console.log('userId=' + this.userid);
    this.user.id = Number(this.userid);
    console.log(this.user);
    console.log('historybook=' + item.id);
    this.history.historyBook = item;
    this.history.historyUser = this.user;

    console.log(this.history);

  
    this.dataservice.cancelReserveBookService(this.user.id, item.id).subscribe(
      (res) => {
        this.updateData();
        console.log('OK');
      },
      error => { console.error(error)})
  }



  addFav(item) {

    const user2 = Number(this.userid);

    this.dataservice.addFavoritesServices(user2, item).subscribe(
      (res) => {
        this.updateUser();
        console.log("OK")
      },
      error => { console.error(error) });

    console.log(item);
  }
  delFav(item) {

    let user2 = Number(this.userid);
    let bookId = item.id;
    this.dataservice.removeFavoritesServices(user2, item).subscribe(

      (res) => {
        this.updateUser();
        console.log('OK')
      },
      error => { console.error(error)});
    console.log(user2);


  }

  /*  */
  clickItem(item) {

    this.router.navigate(['bookdetails', item.isbn]);
    console.log(item);
  }


  css() { this.set = true; }
  css2() { this.selR = true; }


}
