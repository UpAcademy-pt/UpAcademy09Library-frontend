import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalog } from '../../models';



const apiUrl = "http://localhost:8080/libraryManagmentApp/api/books/";

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {


  // HttpClient required to CRUD
  constructor(private http: HttpClient) {
  }

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

  // Find Book by ID  ---- NÃO ESTÁ EM USO---
  public getCatalogById(id: number) {
    return this.http.get(apiUrl + id);
  }
  // Find book keyword
  public getCatalogByKeyword(keyword: string) {
    return this.http.get(apiUrl + 'generalresearch/?keyExpression=' + keyword);
  }

  // Find by title /* queryParam ---To Test?-- */
  public getCatalogByTitle(string: string) {
    return this.http.get(apiUrl + 'researchbytitle/?titleToTest=' + string);
  }

  // Find by Description
  public getCatalogByDescription(string: string) {
    return this.http.get(apiUrl + 'researchbydescription/?descriptionToTest=' + string);
  }

  // Find by author
  public getCatalogByAuthor(string: string) {
    return this.http.get(apiUrl + 'researchbyauthor/?authorToTest=' + string);
  }

  // Find by topic
  public getCatalogByTopic(string: string) {
    return this.http.get(apiUrl + 'researchbytopic/?topicToTest=' + string);
  }

  // Find by isbn
  public getCatalogByIsbn(string: string) {
    return this.http.get(apiUrl + 'researchbyisbn/?isbnToTest=' + string);
  }

  // Get all available books
  public getAvailableBooks() {
    return this.http.get(apiUrl + 'getallavailablebooks');
  }

  // Get remaining book info from google API by Title
  public getBookInfoGoogleApi(insertedTitle: string) {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + insertedTitle + '&orderBy=relevance');
  }
  // Get remaining book info from google API by ISBN
  public getBookIsbnGoogleApi(isbn: number) {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn);
  }
   // Get remaining book info from google API by Author
   public getBookAuthorGoogleApi(author: string) {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:' + author + '&orderBy=relevance');
  }

  


  
  // GET Catalog by isbn
  public getCatalogIsbn() {
    return this.http.get(apiUrl + 'getallbooksbyisbn');
  }
}








