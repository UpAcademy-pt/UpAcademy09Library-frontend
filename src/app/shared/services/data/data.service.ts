import { Injectable } from '@angular/core';
import { CatalogApiService } from '../catalog/catalog-api.service';
import { ReplaySubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AcountApiService } from '../account/account-api.service';
import { HistoryApiService } from '../history/history-api.service';
import { Catalog, History } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // observable books
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  // observable users
  public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  // observable history
  public history$: ReplaySubject<any[]> = new ReplaySubject(1);
  // 
  private users: any[] = [];
  // adicionei isto deixou de dar erro, na consola relativo ao admin management ----
  // ---- se alguma coisa com os users estiver a dar erro pode ser daqui
  public user: any;
  private catalog: any;
  public history: any[];
  // object of add and remove favorites
  public objectToSend: Object;
  //
  public search$: ReplaySubject<any[]> = new ReplaySubject(1);
  public search: any;
 
  public searchCatalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  public searchUser$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(private catalogApi: CatalogApiService, private acountApi: AcountApiService, private historyApi: HistoryApiService) {
    this.getCatalog();
    this.getUsers();
  }

  /* BOOKS DATA LOGIC*/

  public getCatalog() {
    this.catalogApi.getCatalogDB().subscribe(
      (res: any) => {
        this.catalog = res;
        this.catalog$.next(res);
      }
    );
  }
  public createCatalog(catalog) {
    this.catalogApi.createBook(catalog).subscribe(
      (res) => {
        console.log("OK");
        this.getCatalog();
      },
      error => { console.error(error); });
  }
  public updateCatalog(catalog) {
    console.log(catalog);
    this.catalogApi.updateBook(catalog);
  }
  public deleteCatalogService(id) {
    this.catalogApi.deleteBook(id).subscribe(
      (res) => {
        console.log("OK");
        this.getCatalog();
      },
      error => { console.error(error); });
  }
  // Está função não está em uso --- ver se está, senão modificar
  public getCatalogById(id) {
    for (const item of this.catalog) {
      if (item.id === id) {
        return item;
      }
    }
  }

  public getCatalogId(id) {
    this.catalogApi.getCatalogById(id).subscribe(
      (res: any) => {
        this.catalog = res;
      }
    );
  }

  //Get all available books
  public getAvailableBooksService() {
    return this.catalogApi.getAvailableBooks();
  }

  // Switch Search
  public queryCatalog(searchableList, input) {
    switch (searchableList) {
      case 'keyword': this.catalogApi.getCatalogByKeyword(input).subscribe(
        (res: any) => {
          return this.searchCatalog$.next(res);
        }
      );
        break;
      case 'title': this.catalogApi.getCatalogByTitle(input).subscribe(
        (res: any) => {
          return this.searchCatalog$.next(res);
        }
      );
        break;
      case 'author': this.catalogApi.getCatalogByAuthor(input).subscribe(
        (res: any) => {
          return this.searchCatalog$.next(res);
        }
      );
        break;
      case 'description': this.catalogApi.getCatalogByDescription(input).subscribe(
        (res: any) => {
          return this.searchCatalog$.next(res);
        }
      );
        break;
      case 'isbn': this.catalogApi.getCatalogByIsbn(input).subscribe(
        (res: any) => {
          return this.searchCatalog$.next(res);
        }
      );
        break;
      case 'topic': this.catalogApi.getCatalogByTopic(input).subscribe(
        (res: any) => {
          return this.searchCatalog$.next(res);
        }
      );
        break;
      default:
        console.error('Erro!');
        break;
    }
    return this.searchCatalog$;
  }

  public getBookInfoGogleApi(insertedTitle) {
    return this.catalogApi.getBookInfoGogleApi(insertedTitle);
  }

  /* USERS DATA LOGIC*/

  // getusers


  public getUserById(id) {
    for (const item of this.users) {
      if (item.id === id) {
        return item;
      }
    }
  }

  public getTheUser(id) {
    this.acountApi.queryUserID(id).subscribe(
      (res: any) => {
        this.user.next(res);
        console.log(res);
      });
  }

  public getUsers() {
    this.acountApi.getUsersDB().subscribe(
      (res: any) => {
        this.user$.next(res);
        this.users = res;
        this.user = res;
      }
    );
  }

  //create users
  public createUser(user) {
    return this.acountApi.createUser(user);
  }

  // update user
  public updateUserServices(id, user) {
    return this.acountApi.updateUser(id, user);
  }

  /*PRIVILEGES OF USER --- Sem subscribe não funciona ---*/

  // change privileges
  public changePrivilegesServices(id) {
    return this.acountApi.changePrivilegesUser(id).subscribe(
      (res) => { console.log('OK'); },
      error => { console.error(error); });
  }
  // disable user
  public disableServices(id) {
    return this.acountApi.disableUser(id).subscribe(
      (res) => { console.log('OK'); },
      error => { console.error(error); });
  }
  // reactive user
  public reactivateServices(id) {
    return this.acountApi.reactivateUser(id).subscribe(
      (res) => { console.log('OK'); },
      error => { console.error(error); });
  }

  // add to Favorite -- TESTAR COM URGÊNCIA --- é a maneira que encontrei para enviar dois objectos
  public addFavoritesServices(userID: number, bookID: number) {
    return this.acountApi.addBookToFavourites(userID, bookID);
  }

  // remove from favorite
  public removeFavoritesServices(userID: number, bookID: number) {
    return  this.acountApi.removeFavourite(userID, bookID);
  }
  // get all favorites
  public getAllFavoritesServices(userID: number) {
    return this.acountApi.getAllFavourites(userID);
  }
  //Find By Id ???
  public queryUserIDServices(userID) {
    this.acountApi.queryUserID(userID).subscribe(
      (res: any) => {
        console.log("OK");
        this.user$.next(res);
        console.log(this.user$);
      }
    );

  }

  // Switch Search
  public queryUser(searchableList, input) {
    console.log('tipo:' + searchableList + 'input:' + input);
    switch (searchableList) {
      case 'name': this.acountApi.queryUserName(input).subscribe(
        (res: any) => {
          return this.searchUser$.next(res);
        }
      );
        break;
      case 'nip': this.acountApi.queryUserNip(input).subscribe(
        (res: any) => {
          return this.searchUser$.next(res);
        }
      );
        break;
      case 'email': this.acountApi.queryUserEmail(input).subscribe(
        (res: any) => {
          return this.searchUser$.next(res);
        }
      );
        break;
      default:
        console.error('Erro!');
        break;
    }
    return this.searchUser$;
  }



  /* HISTORY DATA LOGIC*/

  // Reserve a Book
  public reserveBookService(reserve: any) {
    return this.historyApi.reserveBookHistory(reserve);
  }

  // cancel book reserve
  public cancelReserveBookService(userID: number, bookID: number) {
    return this.historyApi.cancelReservation(userID,bookID);
  }

  // Pickup book
  public pickupBookService(bookToPickUp: any) {
    return this.historyApi.pickupBook(bookToPickUp);
  }
  // Deliver book
  public deliverBookService(bookToDeliver: any) {
    return this.historyApi.deliverBook(bookToDeliver);
  }
  // User History
  public getUserHistoryService(userID: number) {
    this.historyApi.getUserHistory(userID).subscribe(
      (res: any) => {
        this.history$.next(res);
        this.history = res;
        console.log(res);
      }
    );
    return this.history$;
  }

  // All History
  public getHistoryService() {
    this.historyApi.getHistory().subscribe(
      (res: any) => {
        this.history$.next(res);
        this.history = res;
        console.log(res);
      }
    );
    return this.history$;
  }
  // User with Book
  public getUserWithBookService(bookID: number) {
    return this.historyApi.getUserWithBook(bookID);
  }
  // Book with User
  public getBookWithUserService(userID: number) {
    return this.historyApi.getBooksWithUser(userID);
  }
}