import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Catalog } from 'src/app/shared/models';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  // Injection
  @Input() catalogdetail: any;
  // variables
  modalRef: BsModalRef;
  public catalog: Catalog = new Catalog();


  constructor(private modalService: BsModalService, private dataService: DataService) {}

  ngOnInit() {
    this.catalog = this.catalogdetail;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
  this.dataService.updateCatalog(this.catalog);
  }

}
