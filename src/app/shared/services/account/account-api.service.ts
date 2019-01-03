import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AcountApiService {
  private currentUser: User = new User();
  public id ;

  constructor(
    private http: HttpClient
  ) {}

  public loginUserNg(email,password) {
    return this.http.get('http://localhost:8080/libraryManagmentApp/api/users/loginuser?userEmail='+email+'&userPassword='+password);
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


}
