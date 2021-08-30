import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(formGroup: FormGroup) {
    return this.http.post(`${environment.resetPassword}/retry/password/email`, formGroup.value);
  }

  sendToken(formGroup: FormGroup) {
    return this.http.post<string>(`${environment.resetPassword}/retry/password/token`, formGroup.value);
  }

  newPassword(formGroup: FormGroup) {
    return this.http.post(`${environment.resetPassword}/retry/password`, formGroup.value);
  }
}
