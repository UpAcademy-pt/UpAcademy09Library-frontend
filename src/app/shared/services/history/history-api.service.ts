import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalog, History } from '../../models';
import { map } from 'rxjs/operators'
const apiUrl = "http://localhost:8080/libraryManagmentApp/api/historys";

@Injectable({
  providedIn: 'root'
})

export class HistoryApiService {

  constructor(private http: HttpClient) { }


  // POST Reserve a Book
  public reserveBookHistory(reserve: any) {
    console.log("reserve api: ");
    console.log(reserve);
    console.log(apiUrl + '/reservebook');
    return this.http.post(apiUrl + '/reservebook', reserve)




  }
 // PUT  cancel reservation
  public cancelReservation(userID, bookID){

    return this.http.put(apiUrl + '/cancelreservation?userId=' +userID + '&bookId=' + bookID, null);
  }


  // PUT  Pickup book
  public pickupBook(bookToPickUp: any) {
    console.log("pickupBook : ", bookToPickUp);
    return this.http.put(apiUrl + '/pickupbook', bookToPickUp).subscribe(
      (res) => { console.log('OK'); },
      error => { console.error(error); });
  }

  // PUT  Deliver book
  public deliverBook(bookToDeliver: any) {
    console.log('deliverBook : ', bookToDeliver);
   return this.http.put(apiUrl + '/deliverbook', bookToDeliver).subscribe(
      (res) => { console.log('OK'); },
      error => { console.error(error); });
  }

  // GET  User History
  public getUserHistory(userID: number) {
    return this.http.get(apiUrl + '/userhistory/' + userID);
    // return this.http.get(apiUrl + '/userhistory/' + userID).pipe(map((response)=> {
    //   console.log(response)
    //   response.nuno=23;
    //   return response
    // }));
  }

  // GET All History
  public getHistory() {
    return this.http.get(apiUrl);
  }


  // GET  User with Book
  public getUserWithBook(bookID: number) {
    return this.http.get(apiUrl + '/getuserwithbook/' + bookID);
  }

  // GET  Book with User
  public getBooksWithUser(userID: number) {
    return this.http.get(apiUrl + '/bookinusebyuser/' + userID);
  }

}
