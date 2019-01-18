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
  @Input() historyRequest$: any;
  history: any;
  subscription: Subscription;
  highestToReturn$: ReplaySubject<any[]> = new ReplaySubject(1);


  constructor(private dataService: DataService, public router: Router) { }

  ngOnInit() {
    // se eu não subsescrever ao data service aqui , o resto do código do history não funciona
    this.subscription = this.dataService.getHistoryService().subscribe(
      (res) => {
        this.history = res;
        this.getHighest();
      },
      error => { console.error(error); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /* MUDAR PARA ISBN */
  public getHighest() {
    const highest = {};
    const highestToReturn = [];
    this.history.forEach(history => {
      highest[history.historyBook.id] = (highest[history.historyBook.id] || 0) + 1;
    });
    const highestToReturnMax = Object.keys(highest);
    let index = 0;
    while (index < 5) {
      this.getBook(Number(highestToReturnMax[index])).subscribe(
        (res) => {
          highestToReturn.push(res);
        }
      );
      index++;
    }
    setTimeout(() => {
      console.log('highestToReturn : ', highestToReturn, typeof highestToReturn);
      this.highestToReturn$.next(highestToReturn);
    }, 1000);
  }

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
