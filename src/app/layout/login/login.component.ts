import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { AcountApiService } from 'src/app/shared/services';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public account: User = new User();

  modalRef: BsModalRef;

  constructor(
    public router: Router,
    private accountApi: AcountApiService,
    private modalService: BsModalService,

  ) { }

  ngOnInit() {
    this.openModal
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
