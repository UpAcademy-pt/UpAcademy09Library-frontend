import { Injectable } from '@angular/core';
import { CatalogApiService } from '../catalog/catalog-api.service';
import { ReplaySubject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   //observable
  public catalog$: ReplaySubject<any[]> = new ReplaySubject(1);
  private catalog: any;

  
  constructor(private catalogApi: CatalogApiService) {
      this.getCatalog();
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

    public getCatalogById(id){
      for (const item of this.catalog) {
        if(item.id === id) {
          return item;
        }
      }
    }

    
}
