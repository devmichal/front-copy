import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "./tasks.component";
import {NgModule} from "@angular/core";

const TaskRoutes: Routes = [
  {
    path: '',
    component: TasksComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(TaskRoutes)],
  exports: [
    RouterModule
  ]
})
export class TaskRoute { }
