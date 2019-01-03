import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcountApiService {
  private currentUser: User = new User();
  public id ;

  constructor(
    private http: HttpClient,
    private accountApi: AccountApiService
  ) {}

  public loginUserNg(email,passe) {
    return this.http.get('http://localhost:8080/libraryManagmentApp/api/users/loginuser?userEmail='+email+'&userPassword='+passe);
  }

  public lo


}
