import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {UsersRouting} from "./user-routing";
import { NavComponent } from './nav/nav.component';
import {ErrorFormModule} from "../../error-form/error-form.module";
import {PreloadersModule} from "../../preloaders/preloaders.module";
import {HeaderModule} from "../../header/header.module";

@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsersRouting,
    ErrorFormModule,
    PreloadersModule,
    HeaderModule
  ]
})
export class UserModule { }
