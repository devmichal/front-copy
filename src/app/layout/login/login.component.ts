import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../_services/http/login.service";
import {first} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginRedirectService} from "../../_helper/redirect/login-redirect.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  errorLogin = false;
  submitted = false;
  activeInput = 0;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private loginRedirect: LoginRedirectService
  ) { }

  ngOnInit(): void {

    this.createLoginForm();
  }

  get valid() { return this.loginForm.controls; }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      username: ['' ,Validators.required]
    });
  }

  loginTo() {

    this.submitted = true;
    this.errorLogin = false;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.loginService.login(this.loginForm)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.loginRedirect.changeRoute();
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.errorLogin = true;
        });
  }

  changeActiveInput(numberInput: number) {
    this.activeInput = numberInput;
  }

  deActiveInput() {
    this.activeInput = 0;
  }

}
