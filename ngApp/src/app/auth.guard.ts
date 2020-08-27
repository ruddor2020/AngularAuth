import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivate() : boolean {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login'])
      return false;
    }
  }
}
