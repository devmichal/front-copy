import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FormGroup} from "@angular/forms";
import {map} from "rxjs/operators";
import decode from 'jwt-decode';
import {Router} from "@angular/router";
import {Token} from "../../_model/token/token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(formData: FormGroup) {
    return this.http.post<any>(`${environment.api}/login_check`, formData.value)
      .pipe(map(token => {
        localStorage.setItem('userToken', JSON.stringify(token));
        this.afterLogin();
        return token;
      }));
  }

  afterLogin() {
    const token = localStorage.getItem('userToken');
    if (token) {
      sessionStorage.removeItem('client-data');
      sessionStorage.removeItem('task-data');
      sessionStorage.removeItem('type-text-data')
      const decodeToken = decode(token);
      localStorage.setItem('userTokenData', JSON.stringify(decodeToken));
    }
  }

  logout() {
    localStorage.removeItem('userTokenData');
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  getToken(): Token {
    return JSON.parse(<string>localStorage.getItem('userToken'));
  }
}
