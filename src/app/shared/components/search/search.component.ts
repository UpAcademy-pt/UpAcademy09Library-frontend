import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services';
import { ReplaySubject } from 'rxjs';
import { Catalog } from '../../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search$: ReplaySubject<any[]> = new ReplaySubject(1);
  private search: any
  // filter var
  selectedTypeSearch: string = 'keyword';
  searchableList: string;
  input:string;
  constructor(public router: Router,private dataService: DataService) { }

  ngOnInit() {

  }

  // search type
  selectChangeHandler(event: any) {
    // search selected
    this.selectedTypeSearch = event.target.value;
    // search Type to FilterPipe
    console.log(this.selectedTypeSearch);
    return this.searchableList = this.selectedTypeSearch;
   
  }

  public searchMethod(input, searchableList) {

    console.log(input);
    console.log(this.searchableList);

    switch (searchableList) {
      case 'keyword':
        console.log(searchableList);
        this.search$.subscribe(this.search.searchKeyword(input));
        console.log(this.search$)
        break;
      case 'title':
      console.log(searchableList);
      this.search$ = this.search.searchTitle(input);
        break;
      case 'author':
      console.log(searchableList);
      this.search$ = this.search.searchAuthor(input);
        break;
      case 'description':
      console.log(searchableList);
      this.search$ = this.search.searchDescription(input);
        break;
      case 'topic':
      console.log(searchableList);
      this.search$ = this.search.searchTopic(input);
     
        break;
      default:
        console.log("erro no search");
        break;
    }
    console.log(this.search$)
    return this.search$;
  }

  /* Query Books */

  //Find book keyword
  public searchKeyword(keyword) {
    this.dataService.getCatalogByKeywordService(keyword).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
        console.log(this.search$);
      }
    );
  }
  //Find by title
  public searchTitle(title) {
    this.dataService.getCatalogByTitleService(title).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
      }
    );
  }

  //Find by Description
  public searchDescription(description) {
    this.dataService.getCatalogByDescriptionService(description).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
      }
    );
  }

  //Find by author
  public searchAuthor(author) {
    this.dataService.getCatalogByAuthorService(author).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
      }
    );
  }

  //Find by topic
  public searchTopic(topic) {
    this.dataService.getCatalogByTopicService(topic).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
      }
    );
  }

  //Find by isbn
  public searchIsbn(author) {
    this.dataService.getCatalogByIsbnService(author).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
      }
    );
  }

  /* Query Users */

  //Find By Name
  public searchName(name) {
    this.dataService.queryUserNameServices(name).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
      }
    );
  }
  //Find by Nip
  public searchNIP(nip) {
    this.dataService.queryUserNipServices(nip).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
      }
    );
  }
  //Find by email
  public searchEmail(email) {
    this.dataService.queryUserEmailServices(email).subscribe(
      (res: any) => {
        this.search = res;
        this.search$.next(res);
      }
    );
  }
}
