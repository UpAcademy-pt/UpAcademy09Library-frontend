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
    return this.http.get(apiUrl + "getall");
  }

  // create user
  public createUser(user: User) {
    console.log("user : ", user);
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
