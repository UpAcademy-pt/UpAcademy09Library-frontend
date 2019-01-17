import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {

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

  // falta por a ir para a última tab
  cancel() {
    this._location.back(); // <-- go back to previous location on cancel
  }

}
