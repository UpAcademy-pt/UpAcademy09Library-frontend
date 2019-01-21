import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Catalog } from 'src/app/shared/models';
import { DataService } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  // Injection
  @Input() catalogDetail: any;
  // variables
  catalog$: any;
  modalRef: BsModalRef;
  public catalog: Catalog = new Catalog();


  constructor(private modalService: BsModalService, private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.catalog$ = this.dataService.getCatalogId(Number(params.id));
      });
  }

  ngOnInit() {
    this.catalog$.subscribe((res: any) => {
      this.catalog = res;
      console.log(this.catalog);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
  this.dataService.updateCatalog(this.catalog);
  }

}
