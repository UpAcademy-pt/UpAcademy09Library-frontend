import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalog } from '../../models';



const apiUrl = "http://localhost:8080/libraryManagmentApp/api/books/";

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {

  // HttpClient required to CRUD
  constructor(private http: HttpClient) { }

  // GET Catalog
  public getCatalogDB() {
    return this.http.get(apiUrl);
  }

  // GET Catalog by ID  ---- Não temos aplicado -- como podemos aplicar -- 
  // dizemos que é como se fosse o código de barras que os livros costuma ter???
  public getCatalogById(id: number) {
    return this.http.get(apiUrl + id);
  }

  // POST create a book to catalog
  public createBook(book: Catalog) {
    console.log("book : ", book);
    return this.http.post(apiUrl, book)
  }

  // PUT update book
  public updateBook(book: Catalog) {
    console.log("book : ", book);
    this.http.put(apiUrl, book).subscribe(
      (res) => { console.log("OK") },
      error => { console.error(error) });
  }

  // DELETE Book by id
  public deleteBook(id) {
    return this.http.delete(apiUrl + id)
  }
  
}








