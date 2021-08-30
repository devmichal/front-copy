import {RouterModule, Routes} from "@angular/router";
import {ResetPasswordComponent} from "./reset-password.component";
import {NgModule} from "@angular/core";

const ResetPasswordRoute: Routes = [
  {
    path: '',
    component: ResetPasswordComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(ResetPasswordRoute)],
  exports: [
    RouterModule
  ]
})
export class ResetPasswordRoutes { }
