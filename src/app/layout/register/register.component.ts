import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { DataService } from 'src/app/shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.dataService.createUser(this.user);
    }

}
