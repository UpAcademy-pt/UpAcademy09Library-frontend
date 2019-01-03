import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { User } from '../../models/user';
import { AcountApiService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLogged ?= true;
  @Input() isAdmin ?= true;

  public account: User = new User();
  public modalRef: BsModalRef;
  public msg: String;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private accountApi: AcountApiService
  ) { }

  ngOnInit() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  loginUserNg() {
    this.accountApi.loginUserNg(this.account.email, this.account.password).subscribe(
      (res: any) => {
        if (res !== null) {
          this.accountApi.setCurrentUser(res);
          this.modalRef.hide();
        } else {
          this.msg = 'Erro';
        }
       
      }
    );
  }

}
