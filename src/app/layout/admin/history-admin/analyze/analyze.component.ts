import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared';
import { Router } from '@angular/router';
import { Subscription, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit, OnDestroy {
  historyRequest$: any;
  history: any;
  subscription: Subscription;
  highestToReturn$: ReplaySubject<any[]> = new ReplaySubject(1);


  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.historyRequest$ = this.dataService.getHistoryService();
    // se eu não subsescrever ao data service aqui , o resto do código do history não funciona
    this.subscription = this.dataService.getHistoryService().subscribe(
      (res) => {
        this.history = res;
      },
      error => { console.error(error); });
       this.mostReadedBooks();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Most Readed Books
  public mostReadedBooks() {
    this.highestToReturn$ = this.dataService.mostReadBook();
  }

  // /* MUDAR PARA ISBN */
  // public getHighest() {
  //   const highest = {};
  //   const highestToReturn = [];
  //   this.history.forEach(history => {
  //     highest[history.historyBook.id] = (highest[history.historyBook.id] || 0) + 1;
  //   });
  //   const highestToReturnMax = Object.keys(highest);
  //   let index = 0;
  //   while (index < 5) {
  //     this.getBook(Number(highestToReturnMax[index])).subscribe(
  //       (res) => {
  //         highestToReturn.push(res);
  //       }
  //     );
  //     index++;
  //   }
  //   setTimeout(() => {
  //     this.highestToReturn$.next(highestToReturn);
  //   }, 1000);
  // }

  public getBook(item) {
    return this.dataService.getCatalogIdService(item);
  }

  clickBook(item) {
    this.router.navigate(['bookadmin', item.id]);
  }
  // este book é o id -- porque as keys ho highest são os id's dos livros
  clickBookMustRead(book) {
    this.router.navigate(['bookadmin', book.id]);
  }
}
