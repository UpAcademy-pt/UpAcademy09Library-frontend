import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AcountApiService } from '../services/account/account-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountApi: AcountApiService
  ) { }

  canActivate() {
    if (this.accountApi.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
