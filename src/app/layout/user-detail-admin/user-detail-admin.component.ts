import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail-admin',
  templateUrl: './user-detail-admin.component.html',
  styleUrls: ['./user-detail-admin.component.css']
})
export class UserDetailAdminComponent implements OnInit, OnDestroy {

  // Variables
  user: any;
  history: any;
  bookToPickup: History;
  bookToDeliver: History;
  subscription: Subscription;



  constructor(private _location: Location, private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.user = this.dataService.getUserById(Number(params.id));
        console.log(this.user.id);
      });
  }

  ngOnInit() {
    this.subscription = this.dataService.getUserHistoryService(this.user.id).subscribe((data) => {
      this.history = data;
      console.log(this.history[0].historyBook.id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public pickUpBook(bookToPickup) {
    const bookId = history[0].historyBook.id;
    bookToPickup = {id: bookId};
    console.log(bookToPickup);
    this.dataService.pickupBookService(bookToPickup);
  }

  public deliverBook(bookToDeliver) {
    this.dataService.deliverBookService(bookToDeliver);
  }

  public changePrivileges(id) {
    console.log(id);
    this.dataService.changePrivilegesServices(id);
  }

  public disable(id) {
    this.dataService.disableServices(id);
  }

  public reactivate(id) {
    this.dataService.reactivateServices(id);
  }

  // falta por a ir para a última tab
  cancel() {
    this._location.back(); // <-- go back to previous location on cancel
  }

}
