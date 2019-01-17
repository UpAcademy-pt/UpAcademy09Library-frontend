import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DataService } from 'src/app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {

  // Injection
  @Input() historyInjection: any;
  // Variables
  history: any;
  modalRef: BsModalRef;
  mostRead: any;


  constructor(private modalService: BsModalService, public router: Router) {}

  ngOnInit() {
    this.history = this.historyInjection;
    // this.mostRead = this.getHighest();
  }
  /* MUDAR PARA ISBN ---- PASSAR PARA O BACK-END*/
  public getHighest() {
    const highest = {};
    this.history.forEach(history => {
      highest[history.historyBook.id] = (highest[history.historyBook.id] || 0) + 1;
    });
    console.log(highest);
    return Object.keys(highest);
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
