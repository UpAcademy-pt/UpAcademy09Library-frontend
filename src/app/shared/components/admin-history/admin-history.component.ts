import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-history',
  templateUrl: './admin-history.component.html',
  styleUrls: ['./admin-history.component.css']
})
export class AdminHistoryComponent implements OnInit, OnDestroy {
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

  public getHighest() {
    const highest = {};
    this.history.forEach(history => {
      highest[history.historyBook.id] = (highest[history.historyBook.id] || 0) + 1;
    });
    console.log(highest);
    return Object.keys(highest);
  }

  public getBook(id) {
    this.dataService.getCatalogId(id);
  }

  // Give Book to User
  public pickUpBook(history) {
    this.dataService.pickupBookService(history.historyBook);
  }
  // receive Book from User
  public deliverBook(history) {
    this.dataService.deliverBookService(history.historyBook);
  }

  clickUser(item) {
    this.router.navigate(['userdetailadmin', item.id]);
  }
  clickBook(item) {
    this.router.navigate(['bookdetailsadmin', item.id]);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
