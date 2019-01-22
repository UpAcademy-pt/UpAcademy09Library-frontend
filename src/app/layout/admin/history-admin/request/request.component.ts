import { Component, OnInit, Input, TemplateRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DataService } from 'src/app/shared';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent implements OnInit {
  historyRequest$: any;
  history: any;
  bookToPickup: History;
  subscription: Subscription;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.historyRequest$ = this.dataService.getHistoryService();
  }

  onSubmit(history) {
    console.log(history);
    this.pickUpBook(history);
  }

  // Give Book to User
  public pickUpBook(history) {
    this.dataService.pickupBookService(history.historyBook).subscribe(
      (res) => {
        this.historyRequest$ = this.dataService.getHistoryService();
        console.log(res);
      },
      error => { console.error(error); });
  }
  clickUser(item) {
    this.router.navigate(['useradmin', item.id]);
  }
  clickBook(item) {
    this.router.navigate(['bookadmin', item.id]);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
