import { Component, OnInit, Input, TemplateRef, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DataService } from 'src/app/shared';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit, OnDestroy {

  @Input() catalog$: any;
  user: any;
  history: any;
  subscription: Subscription;
  modalRef: BsModalRef;
  mostRead: any;


  constructor(private modalService: BsModalService, private dataService: DataService, public router: Router) {
    this.history = dataService.history$;
  }

  ngOnInit() {
    // mudar isto quando houver query geral
    this.subscription = this.dataService.getHistoryService().subscribe((data) => {
      this.history = data;
      this.mostRead = this.getHighest();
    });
    return history;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // para não dar erro na consola porcausa dos ngfor
  public array(val) {
    return Array.from(val);
  }
  /* MUDAR PARA ISBN */
  public getHighest() {
    const highest = {};
    this.history.forEach(history => {
      highest[history.historyBook.id] = (highest[history.historyBook.id] || 0) + 1;
    });
    console.log(highest);
    return Object.keys(highest);
  }

  // public getBook(item) {
  //   console.log(this.dataService.getCatalogId(item));
  //   this.dataService.getCatalogId(item);
  // }

  clickBook(item) {
    this.router.navigate(['bookadmin', item.id]);
  }
  // este book é o id -- porque as keys ho highest são os id's dos livros
  clickBookMustRead(book) {
    this.router.navigate(['bookadmin', book]);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
