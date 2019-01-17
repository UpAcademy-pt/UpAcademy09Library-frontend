import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { User } from 'src/app/shared/models';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-disable',
  templateUrl: './disable.component.html',
  styleUrls: ['./disable.component.css']
})
export class DisableComponent implements OnInit {

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
    this.disable(this.user);
  }

  /* Os Endpoints especificios para mexer
     nos privilégios não estão a funcionar*/

  // Disable User
  public disable(user) {
    this.user.active = false;
    this.user.admin = false;
    this.dataService.updateUserServices(user.id, user).subscribe(
      (res) => { console.log('OK'); },
      error => { console.error(error); });
  }
}
