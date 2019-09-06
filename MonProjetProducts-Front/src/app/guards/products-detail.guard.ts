import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDetailGuard implements CanActivate {
  constructor(  private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
     console.log('*************** GUARD ACTIF ICI ********');
   // this._router.navigateByUrl('/'); // Forcer le redirection vers Welcome
     return true;
  }
}
