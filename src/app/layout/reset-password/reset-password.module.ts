import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import {ResetPasswordRoutes} from "./reset-password-route";
import {WindowActionModule} from "../../window-action/window-action.module";
import { SendTokenComponent } from './send-token/send-token.component';
import { CheckTokenComponent } from './check-token/check-token.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PreloadersModule} from "../../preloaders/preloaders.module";



@NgModule({
  declarations: [
    ResetPasswordComponent,
    SendTokenComponent,
    CheckTokenComponent,
    NewPasswordComponent
  ],
    imports: [
        CommonModule,
        ResetPasswordRoutes,
        WindowActionModule,
        ReactiveFormsModule,
        PreloadersModule
    ]
})
export class ResetPasswordModule { }
