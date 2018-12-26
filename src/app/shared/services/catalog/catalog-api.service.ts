import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalog } from '../../models';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8080/libraryManagmentApp/api/books/";

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
   // pedidos ajax
  constructor(private http: HttpClient) { }

  public getCatalogDB() {
 
    return this.http.get('http://localhost:8080/libraryManagmentApp/api/books/');
  }
  
  public getCatalogById(id : number) {

    return this.http.get('http://localhost:8080/libraryManagmentApp/api/books/'+ id);
  }

  public createBook(catalog): Observable<Catalog>{
    return this.http.post<Catalog>(apiUrl,catalog,httpOptions).pipe(
      tap((catalog: Catalog) => console.log(`added book w/ title=${catalog.title}`)),
      catchError(this.handleError<Catalog>('addBook'))
      );
  }

 



  // public updateCatalog(Catalog : Catalog){

  //   this.http.put<Catalog>('http://localhost:8080/libraryManagmentApp/api/books/');

  //   return console.log("Update OK")
  // }

  public deleteCatalog(id : number){

    return this.http.delete('http://localhost:8080/libraryManagmentApp/api/books/'+ id);
  }

}
