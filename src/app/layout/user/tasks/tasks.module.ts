import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskRoute} from "./task-route";
import {TasksComponent} from "./tasks.component";
import {AddTaskComponent} from "./add-task/add-task.component";
import {TaskTableComponent} from "./task-table/task-table.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HeaderModule} from "../../../header/header.module";
import {PreloadersModule} from "../../../preloaders/preloaders.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { StatusTaskPipe } from './pipe/status-task.pipe';
import {WindowActionModule} from "../../../window-action/window-action.module";
import {ReactiveFormsModule} from "@angular/forms";
import { SelectListComponent } from './add-task/select-list/select-list.component';
import {NormalPreloadersModule} from "../../../normal-preloaders/normal-preloaders.module";



@NgModule({
  declarations: [
    TasksComponent,
    AddTaskComponent,
    TaskTableComponent,
    StatusTaskPipe,
    SelectListComponent,
  ],
    imports: [
        CommonModule,
        TaskRoute,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        HeaderModule,
        PreloadersModule,
        MatProgressSpinnerModule,
        WindowActionModule,
        ReactiveFormsModule,
        NormalPreloadersModule,
    ]
})
export class TasksModule { }
