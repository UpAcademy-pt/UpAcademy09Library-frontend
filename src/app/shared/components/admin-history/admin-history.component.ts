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
  bookMoreRead: any;
  highest = {};
  highestOutput = [];
  constructor(private modalService: BsModalService, private dataService: DataService, public router: Router) {
    this.history = dataService.history$;


  }

  ngOnInit() {
    // mudar isto quando houver query geral
    this.subscription = this.dataService.getUserHistoryService(2).subscribe((data) => {
      this.history = data;
      // const highest = [this.history.map(a => a.historyBook)];
      this.bookMoreRead = this.getHighest();
    });
    return history;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public getHighest() {
    this.history.forEach(history => {
      this.highest[history.historyBook.id] = (this.highest[history.historyBook.id] || 0) + 1;
    });

    
    console.log(Object.entries(this.highest).slice(0));
    return Object.keys(this.highest);
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
