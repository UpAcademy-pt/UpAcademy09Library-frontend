import { Component, OnInit, OnDestroy, Input, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DataService } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.component.html',
  styleUrls: ['./history-admin.component.css']
})
export class HistoryAdminComponent implements OnInit, OnDestroy {

  // Injection
  @Input() catalog$: any;

  // Variables
  user: any;
  history: any;
  bookToPickup: History;
  bookToDeliver: History;
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
    return history ;
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

  // Give Book to User
  public pickUpBook(history) {
    this.dataService.pickupBookService(history.historyBook);
  }
  // receive Book from User
  public deliverBook(history) {
    this.dataService.deliverBookService(history.historyBook);
  }

  clickUser(item) {
    this.router.navigate(['useradmin', item.id]);
  }
  clickBook(item) {
    this.router.navigate(['bookadmin', item.id]);
  }
  clickBookMustRead(book) {
    this.router.navigate(['bookadmin', book]);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
