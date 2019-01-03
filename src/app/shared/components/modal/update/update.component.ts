import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataService } from 'src/app/shared/services';
import { Catalog } from 'src/app/shared/models';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() row: any;

  modalRef: BsModalRef;
  public catalog: Catalog = new Catalog();
  updateImage: string;

  constructor(private modalService: BsModalService, private dataService: DataService) {
    this.updateImage = '/assets/icons8-compose-16.png'
   }

  ngOnInit() {
    this.catalog = this.row;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
   
  }

  onSubmit() {
  //this.catalog.id = this.row.id;
  this.dataService.updateCatalog(this.catalog);
  }
 }

