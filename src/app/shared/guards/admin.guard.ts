import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AcountApiService } from '../services/account/account-api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
     constructor(
      private router: Router,
      private accountApi: AcountApiService
    ) { }
    canActivate() {
      if (this.accountApi.isAdmin()) {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    }
  }
