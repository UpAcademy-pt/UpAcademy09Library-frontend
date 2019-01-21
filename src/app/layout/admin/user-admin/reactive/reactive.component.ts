import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { User } from 'src/app/shared/models';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

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
    this.reactive(this.user);
  }


  /* Os Endpoints especificios para mexer
     nos privilégios não estão a funcionar*/

  // Disable User
  public reactive(user) {
    this.user.active = true;
    this.dataService.reactivateServices(user.id).subscribe(
      (res) => { console.log(res); },
      error => { console.error(error); });
  }
}
