import { Injectable } from '@angular/core';
import { CatalogApiService } from '../catalog/catalog-api.service';
import { ReplaySubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AcountApiService } from '../account/account-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // observable books
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  // observable users
  public user$: ReplaySubject<any[]> = new ReplaySubject(1);
  private catalog: any
  private users:any

  constructor(private catalogApi: CatalogApiService, private acountApi: AcountApiService) {
    this.getCatalog();
    this.getUsers();
  }

  /* BOOKS DATA LOGIC*/
  public getCatalogById(id){
    for (const item of this.catalog) {
      if(item.id === id) {
        return item;
      }
    }
  }


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
      error => { console.error(error) });
  }

  public deleteCatalogService(id) {
    this.catalogApi.deleteBook(id).subscribe(
      (res) => {
        console.log("OK");
        this.getCatalog();
      },
      error => { console.error(error) });
  }

  public updateCatalog(catalog) {
    console.log(catalog);
    this.catalogApi.updateBook(catalog);
  }

  /* USERS DATA LOGIC*/

  // getusers


  public getUserById(id){
    for (const item of this.users) {
      if(item.id === id) {
        return item;
      }
    }
  }
  public getUsers() {
    this.acountApi.getUsersDB().subscribe(
      (res: any) => {
        console.log("OK");
        this.user$.next(res);
        console.log(this.user$);
      }
    );
  }

  //create users
  public createUser(user) {
    return this.acountApi.createUser(user)
  }

  // update user
  public updateUserServices(id, user) {
    this.acountApi.updateUser(id, user);
  }

  // change privileges
  public changePrivilegesServices(id) {
    console.log("data id: " + id);
    this.acountApi.changePrivilegesUser(id);
  }

  // disable user
  public disableServices(id) {
    console.log("data id: " + id);
    this.acountApi.disableUser(id);
  }
  // reactive user
  public reactivateServices(id) {
    console.log("data id: " + id);
    this.acountApi.reactivateUser(id);
  }

  // add to Favorite

  // remove from favorite

  // get all favorites

  






}
