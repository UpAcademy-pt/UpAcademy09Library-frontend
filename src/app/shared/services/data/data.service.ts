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
  isLoadingResults: boolean;

  constructor(private catalogApi: CatalogApiService) {
      this.getCatalog();
    }

    public getCatalog() {
      this.catalogApi.getCatalogDB().subscribe(
        (res: any) => {
          this.catalog$.next(res);
        }
      );
    }

    public createCatalog(catalog) {
      this.catalogApi.createBook(catalog).subscribe(
        (res: any) => {
          this.catalog$.next(res);
        }
      );
    }

    public onFormSubmit(form:NgForm) {
      this.isLoadingResults = true;
      this.catalogApi.createBook(form)
        .subscribe(res => {
      
            this.isLoadingResults = false;
          
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          });
    }


}
