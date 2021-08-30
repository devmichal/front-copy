import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./layout/login/login.component";
import {AuthUserGuard} from "./_helper/canLoad/auth-user.guard";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', canLoad: [AuthUserGuard],
    loadChildren: () => import('./layout/user/user.module').then(u => u.UserModule)},
  { path: 'reset/password',
    loadChildren: () => import('./layout/reset-password/reset-password.module').then(re => re.ResetPasswordModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
