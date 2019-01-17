import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DataService } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devolution',
  templateUrl: './devolution.component.html',
  styleUrls: ['./devolution.component.css']
})
export class DevolutionComponent implements OnInit {
  // Injection
  @Input() historyInjection: any;
  // Variables
  history: any;
  bookToDeliver: History;
  subscription: Subscription;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private dataService: DataService, public router: Router) { }

  ngOnInit() {
    this.history = this.historyInjection;
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
