import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalog } from '../../models';

const apiUrl = "http://localhost:8080/libraryManagmentApp/api/historys";

@Injectable({
  providedIn: 'root'
})

export class HistoryApiService {

  constructor(private http: HttpClient) { }


  // POST Reserve a Book
  public reserveBookHistory(reserve: History) {
    console.log("reserve : ", reserve);
    return this.http.post(apiUrl + '/reservebook', reserve)
 
  }
  // PUT  Pickup book --- está função é o que??? a entrega do livro pelo admin ao utilizador?
  public pickupBook(bookToPickUp: Catalog){
    console.log("pickupBook : ", bookToPickUp);
    this.http.put(apiUrl + '/pickupbook', bookToPickUp).subscribe(
      (res) => { console.log("OK") },
      error => { console.error(error) });
  }

  // PUT  Deliver book --- o mesmo que cima?
  public deliverBook(bookToDeliver: Catalog){
    console.log("pickupBook : ", bookToDeliver);
    this.http.put(apiUrl + '/deliverbook', bookToDeliver).subscribe(
      (res) => { console.log("OK") },
      error => { console.error(error) });
  }

  // GET  User History
  public getUserHistory(userID: number) {
    return this.http.get(apiUrl +'/userhistory/' + userID);
  }

  // GET  User with Book
  public getUserWithBook(bookID: number) {
    return this.http.get(apiUrl +'/getuserwithbook/' + bookID);
  }

  // GET  Book with User
  public getBooksWithUser(userID: number) {
    return this.http.get(apiUrl +'/bookinusebyuser/' + userID);
  }

}
