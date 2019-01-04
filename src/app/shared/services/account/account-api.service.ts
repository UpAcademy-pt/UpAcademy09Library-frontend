import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { ReplaySubject } from 'rxjs';

const apiUrl = "http://localhost:8080/libraryManagmentApp/api/users/";

@Injectable({
  providedIn: 'root'
})

export class AcountApiService {
  public currentUser$: ReplaySubject<User> = new ReplaySubject(1);
  private currentUser: User = new User();

  constructor(
    private http: HttpClient
  ) { }

  public loginUserNg(email, password) {
    return this.http.get(apiUrl + 'loginuser?userEmail=' + email + '&userPassword=' + password);
  }

  public logout() {
    this.currentUser$.next(new User());
    this.currentUser = null;
    
    return 'logout';
  }

  public setCurrentUser(user) {
    this.currentUser = user;
    this.currentUser$.next(user);
  }

  public getCurrentId() {
    return this.currentUser.id;
  }

  // pedidos a base de dados

  // get all users

  public getUsersDB() {
    return this.http.get(apiUrl);
  }

  // create user

  public createUser(user: User) {
    return this.http.post(apiUrl, user)
  }


  // /changetoadmin/{userId}
  // /disable/{userId}"
  // /reactivateuser/{userId}


}
