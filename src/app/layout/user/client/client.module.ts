import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import {ClientsRoutes} from "./client-routing";
import {HeaderModule} from "../../../header/header.module";
import {MatTabsModule} from '@angular/material/tabs';
import { ClientTableComponent } from './client-table/client-table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ManagerClientComponent } from './manager-client/manager-client.component';
import {WindowActionModule} from "../../../window-action/window-action.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ErrorFormModule} from "../../../error-form/error-form.module";
import {PreloadersModule} from "../../../preloaders/preloaders.module";
import {NormalPreloadersModule} from "../../../normal-preloaders/normal-preloaders.module";
import { TypeGrossPipe } from './pipe/type-gross.pipe';



@NgModule({
  declarations: [
    ClientComponent,
    ClientTableComponent,
    ManagerClientComponent,
    TypeGrossPipe
  ],
    imports: [
        CommonModule,
        ClientsRoutes,
        HeaderModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        WindowActionModule,
        ReactiveFormsModule,
        ErrorFormModule,
        PreloadersModule,
        NormalPreloadersModule
    ]
})
export class ClientModule { }
