import { Component, OnInit, Input, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { User } from '../../models/user';
import { AcountApiService } from '../../services';
import { ReplaySubject } from 'rxjs';
import { longStackSupport } from 'q';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentUser$: ReplaySubject<User> = new ReplaySubject(1);
  @Input() isLogged ?= false;
  @Input() isAdmin ?= false;
  @ViewChildren('login') login
  @ViewChild('f') form: NgForm;

  public account: User = new User();
  public modalRef: BsModalRef;
  public msg: String;


  constructor(
    private router: Router,
    private modalService: BsModalService,
    private accountApi: AcountApiService
  ) {
    this.currentUser$ = this.accountApi.currentUser$;

    this.currentUser$.subscribe((a) => {
      console.log(a);
      this.account = a;
    });
  }

  ngOnInit() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  loginUserNg() {
    console.log(this.form);
    this.accountApi.loginUserNg(this.account.email, this.account.password).subscribe(
      (res: any) => {
        if (res !== null) {
          this.accountApi.setCurrentUser(res);
          this.modalRef.hide();
          this.account = res;
          if (res.admin) {
            this.router.navigate(['admin']);
            this.isAdmin = true;
            this.isLogged = true;
          } else {
            this.router.navigate(['user']);
            this.isLogged = true;
          }
        } else {
          // tslint:disable-next-line:label-position

          // tslint:disable-next-line:max-line-length
          this.msg = 'O par e-mail/password está incorrecto. Por favor tente novamente ou contacte o administrador para recuperar a sua password';
        }
      }
    );
  }
  logout() {
    this.accountApi.logout();
    this.isLogged = false;
  }
}