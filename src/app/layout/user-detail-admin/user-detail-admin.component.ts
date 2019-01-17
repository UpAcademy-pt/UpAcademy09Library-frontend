import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
    this.history = dataService.history$;
    this.route.params.subscribe(
      params => {
        this.user = this.dataService.getUserById(Number(params.id));
      });
  }

  ngOnInit() {
    this.subscription = this.dataService.getUserHistoryService(this.user.id).subscribe((data) => {
      this.history = data;
    });
    return history;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Give Book to User
  public pickUpBook(history) {
    this.dataService.pickupBookService(history.historyBook);
  }
  // receive Book from User
  public deliverBook(history) {
    this.dataService.deliverBookService(history.historyBook);
  }

  public changePrivileges(id) {
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
