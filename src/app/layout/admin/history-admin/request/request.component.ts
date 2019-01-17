import { Component, OnInit, Input, TemplateRef } from '@angular/core';
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

  // Injection
  @Input() historyInjection: any;
  // Variables
  history: any;
  bookToPickup: History;
  subscription: Subscription;
  modalRef: BsModalRef;


  constructor(private modalService: BsModalService, private dataService: DataService, public router: Router) {  }

  ngOnInit() {
    this.history = this.historyInjection.subscribe((data) => {
      this.history = data;
    });
    return history;
  }

   // para não dar erro na consola porcausa dos ngfor
   public array(val) {
    return Array.from(val);
  }

  // Give Book to User
  public pickUpBook(history) {
    this.dataService.pickupBookService(history.historyBook);
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

  openModal(modal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modal);
  }

}
