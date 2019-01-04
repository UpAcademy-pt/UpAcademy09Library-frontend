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
  public users$: ReplaySubject<any[]> = new ReplaySubject(1);
  
  constructor(private catalogApi: CatalogApiService, private acountApi: AcountApiService) {
      this.getCatalog();
      this.getUsers(); 
    }

    /* BOOKS DATA LOGIC*/

    public getCatalog() {
      this.catalogApi.getCatalogDB().subscribe(
        (res: any) => {
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

    public deleteCatalogService(id){
      this.catalogApi.deleteBook(id).subscribe(
        (res) => { 
          console.log("OK");
          this.getCatalog();
        },
        error => { console.error(error) });
    }

    public updateCatalog(catalog){
      console.log(catalog);
      this.catalogApi.updateBook(catalog);
    }

    /* USERS DATA LOGIC*/

    // getusers
    public getUsers() {
      this.acountApi.getUsersDB().subscribe(
        (res: any) => {
          this.users$.next(res);
        }
      );
    }

    //create users
    public createUser(user) {
      this.acountApi.createUser(user).subscribe(
        (res) => {
          console.log("OK");
          this.getUsers();
        },
        error => { console.error(error) });
    }




}
