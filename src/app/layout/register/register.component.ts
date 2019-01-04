import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { DataService, AcountApiService } from 'src/app/shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  public msg1: String;

  constructor(
    private dataService: DataService,
    private accountApi: AcountApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  // public account: User = new User();

  onSubmit() {
    if (
      this.user.name &&
      this.user.email &&
      this.user.nip &&
      this.user.password
    ) {
      this.dataService.createUser(this.user).subscribe(
        (resp: any) => {
          if (resp === null) {
            this.msg1 = 'Erro: Email já se encontra registado.';
          } else {
            console.log("ola");
            this.accountApi.loginUserNg(resp.email, resp.password).subscribe(
              (res: any) => {
                if (res !== null) {
                  this.accountApi.setCurrentUser(res);

                  if (res.admin) {
                    this.router.navigate(['admin']);
                    // this.isAdmin = true;
                    // this.isLogged = true;
                  } else {
                    this.router.navigate(['user']);
                    // this.isLogged = true;
                  }
                }
              }
            );


          }
        }
      );
    } else {
      this.msg1 = 'Erro: todos os campos são de preenchimento obrigatório.';
    }

  }

}
