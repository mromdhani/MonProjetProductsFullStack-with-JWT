import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutResolver implements Resolve<any>  {
  constructor(private authenticationService: AuthenticationService) {}

  resolve() {

    if (localStorage.getItem('currentUser')) {
        this.authenticationService.logout();
    }
  }
}
