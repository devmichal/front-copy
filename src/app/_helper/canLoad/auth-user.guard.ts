import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';
import {User} from "../../_model/user/user";
import {TypeRoles} from "../../_model/roles/typeRoles";

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanLoad {

  constructor(
    private router: Router
  ) { }

  users!: User;
  typeRoles = TypeRoles;

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    this.users = JSON.parse(<string>localStorage.getItem('userTokenData'));

    if (!this.users){

      this.router.navigate(['/login']);
      return false;
    }

    if (this.users.roles == this.typeRoles.user || this.users.roles == this.typeRoles.admin) {

      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
