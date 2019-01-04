import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

const apiUrl = "http://localhost:8080/libraryManagmentApp/api/users/";

@Injectable({
  providedIn: 'root'
})

export class AcountApiService {
  private currentUser: User = new User();
  public id ;
  

  constructor(private http: HttpClient) {}

  public loginUserNg(email,password) {
    return this.http.get(apiUrl +'loginuser?userEmail='+email+'&userPassword='+password);
  }

  public logout() {
    this.currentUser = null;
    return 'logout';
  }

  public setCurrentUser(user) {
    this.currentUser = user;
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
    console.log("user : ", user);
    return this.http.post(apiUrl, user)
  }


  // /changetoadmin/{userId}
  // /disable/{userId}"
  // /reactivateuser/{userId}


}
