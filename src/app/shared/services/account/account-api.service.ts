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

  public isAuthenticated(): boolean {
    if (this.currentUser.id) {
      return true;
    } else {
      return false;
    }
  }

  public isAdmin(): boolean {
    if (this.currentUser.admin) {
      return true;
    } else {
      return false;
    }
  }

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
    return this.http.get(apiUrl + "getall");
  }

  // create user
  public createUser(user: User) {
    return this.http.post(apiUrl, user)
  }

  // update user
  public updateUser(id: number, user: User){
    console.log("service id: " + id);
    this.http.put(apiUrl+"update/"+ id, user).subscribe(
      (res) => { console.log("OK") },
      error => { console.error(error) });
  }

  // Change user to admin --- um put precisa sempre de body, nem que seja null
  public changePrivilegesUser(id){
    console.log("service id: " + id);
    this.http.put(apiUrl+"changetoadmin/"+ id, null).subscribe(
      (res) => { console.log("OK") },
      error => { console.error(error) });
  }

  // Disable User
  public disableUser(id){
    console.log("service id: " + id);
    this.http.put(apiUrl+ "disable/"+ id, null).subscribe(
      (res) => { console.log("disable") },
      error => { console.error(error) });
  }

  // Reactive User
  public reactivateUser(id){
    console.log("service id: " + id);
    this.http.put(apiUrl+ "reactivateuser/"+ id, null).subscribe(
      (res) => { console.log("reactivate") },
      error => { console.error(error) });
  }








  


  // /disable/{userId}"
  // /reactivateuser/{userId}

}
