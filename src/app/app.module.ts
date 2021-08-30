import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './_services/form/login-form/login-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorFormModule} from "./error-form/error-form.module";
import {PreloadersModule} from "./preloaders/preloaders.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {JwtInterceptor} from "./_helper/JwtInterceptor";
import {ErrorInterceptor} from "./_helper/ErrorInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ErrorFormModule,
    PreloadersModule,
    NoopAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
