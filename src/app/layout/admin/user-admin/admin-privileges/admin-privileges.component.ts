import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { User } from 'src/app/shared/models';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-admin-privileges',
  templateUrl: './admin-privileges.component.html',
  styleUrls: ['./admin-privileges.component.css']
})
export class AdminPrivilegesComponent implements OnInit {

  // Injection
  @Input() userPrivileges: any;
  // variables
  privilegesModal: BsModalRef;
  public user: User = new User();

  constructor(private modalService: BsModalService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.userPrivileges;
  }

  openModal(template: TemplateRef<any>) {
    this.privilegesModal = this.modalService.show(template);
  }

  onSubmit() {
    this.admin(this.user);
  }

  /* Os Endpoints especificios para mexer
     nos privilégios não estão a funcionar*/

  // Admin User
  public admin(user) {
    this.user.admin = true;
    this.user.active = true;
    this.dataService.updateUserServices(user.id, user).subscribe(
      (res) => { console.log('OK'); },
      error => { console.error(error); });
  }
}
