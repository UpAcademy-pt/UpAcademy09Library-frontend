import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { DataService } from 'src/app/shared';
import { User } from 'src/app/shared/models';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.css']
})
export class PrivilegesComponent implements OnInit {

  // Injection
  @Input() userPrivileges: any;
  // variables
  privilegesModal: BsModalRef;
  public user: User = new User();

  constructor(private modalService: BsModalService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.userPrivileges;
  }

  openModal(privileges: TemplateRef<any>) {
    this.privilegesModal = this.modalService.show(privileges);
  }

  onSubmit() {
    this.disable(this.user.id);
  }

  public disable(id) {
    this.dataService.disableServices(id);
  }

  public reactivate(id) {
    this.dataService.reactivateServices(id);
  }

  public changePrivileges(id) {
    this.dataService.changePrivilegesServices(id);
  }

}
