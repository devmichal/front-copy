import {RouterModule, Routes} from "@angular/router";
import {TypeTextComponent} from "./type-text.component";
import {NgModule} from "@angular/core";

const TypeTextRoute: Routes = [
  {
    path: '',
    component: TypeTextComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(TypeTextRoute)],
  exports: [
    RouterModule
  ]
})
export class TypeTextRoutes { }
