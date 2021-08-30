import {RouterModule, Routes} from "@angular/router";
import {WalletComponent} from "./wallet.component";
import {NgModule} from "@angular/core";

const WalletRoute: Routes = [
  {
    path: '',
    component: WalletComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(WalletRoute)],
  exports: [
    RouterModule
  ]
})
export class WalletRouting { }
