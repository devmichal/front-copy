import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {TypeRoles} from "../../_model/roles/typeRoles";
import {User} from "../../_model/user/user";

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectService {

  typeRoles = TypeRoles;
  users!: User;

  constructor(
    private router: Router
  ) { }

  changeRoute() {

    this.users = JSON.parse(<string>localStorage.getItem('userTokenData'));

    if (this.users.roles == this.typeRoles.admin || this.users.roles == this.typeRoles.user) {

      this.router.navigate(['/user']);
      return;
    }

    this.router.navigate(['/login']);
  }
}
