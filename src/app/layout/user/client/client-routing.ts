import {RouterModule, Routes} from "@angular/router";
import {ClientComponent} from "./client.component";
import {NgModule} from "@angular/core";

const ClientRoute: Routes = [
  {
    path: '',
    component: ClientComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(ClientRoute)],
  exports: [
    RouterModule
  ]
})
export class ClientsRoutes { }
