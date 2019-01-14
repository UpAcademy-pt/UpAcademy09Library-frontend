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

  // POST create a book to catalog
  public createBook(book: Catalog) {
    console.log('book : ', book);
    return this.http.post(apiUrl, book);
  }

  // PUT update book
  public updateBook(book: Catalog) {
    console.log('book : ', book);
    this.http.put(apiUrl, book).subscribe(
      (res) => { console.log('OK'); },
      error => { console.error(error); });
  }

  // DELETE Book by id
  public deleteBook(id) {
    return this.http.delete(apiUrl + id);
  }

  /* QUERYS */

  // Find Book by ID  ---- Não temos aplicado -- como podemos aplicar -- 
  // dizemos que é como se fosse o código de barras que os livros costuma ter???
  public getCatalogById(id: number) {
    return this.http.get(apiUrl + id);
  }
  // Find book keyword
  public getCatalogByKeyword(keyword: string) {
    return this.http.get(apiUrl + 'generalresearch/?keyExpression=' + keyword);
  }

  // Find by title
  public getCatalogByTitle(string: string) {
    return this.http.get(apiUrl + "researchbytitle/" + string);
  }

  // Find by Description
  public getCatalogByDescription(string: string) {
    return this.http.get(apiUrl + "researchbydescription/" + string);
  }

  // Find by author
  public getCatalogByAuthor(string: string) {
    return this.http.get(apiUrl + "researchbyauthor/" + string);
  }

  // Find by topic
  public getCatalogByTopic(string: string) {
    return this.http.get(apiUrl + "researchbytopic/" + string);
  }

  //Find by isbn
  public getCatalogByIsbn(string: string) {
    return this.http.get(apiUrl + "researchbyisbn/" + string)
  }

  // Get all available books
  public getAvailableBooks() {
    return this.http.get(apiUrl + "getallavailablebooks");
  }

  // Get remaining book info from google API
  public getBookInfoGogleApi(insertedTitle: string) {
    return this.http.get("https://www.googleapis.com/books/v1/volumes?q=intitle:"+insertedTitle);
  }

  
}








