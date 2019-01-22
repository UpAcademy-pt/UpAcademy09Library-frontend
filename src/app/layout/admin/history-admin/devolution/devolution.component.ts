import { Component, OnInit, TemplateRef, Input } from '@angular/core';
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
  historyRequest$: any;
  history: any;
  bookToDeliver: History;
  subscription: Subscription;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private dataService: DataService, public router: Router) {}

  ngOnInit() {
    this.historyRequest$ = this.dataService.getHistoryService();
  }

  onSubmit(history) {
    console.log(history);
    this.deliverBook(history);
  }

  // Give Book to User
  public deliverBook(history) {
    this.dataService.deliverBookService(history.historyBook).subscribe(
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

