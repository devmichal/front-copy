import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeTextComponent } from './type-text.component';
import {TypeTextRoutes} from "./type-text-route";
import {HeaderModule} from "../../../header/header.module";
import { TextTableComponent } from './text-table/text-table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AddTypeTextComponent } from './add-type-text/add-type-text.component';
import {WindowActionModule} from "../../../window-action/window-action.module";
import {PreloadersModule} from "../../../preloaders/preloaders.module";
import {ErrorFormModule} from "../../../error-form/error-form.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NormalPreloadersModule} from "../../../normal-preloaders/normal-preloaders.module";



@NgModule({
    declarations: [
        TypeTextComponent,
        TextTableComponent,
        AddTypeTextComponent
    ],
    exports: [
        TextTableComponent
    ],
    imports: [
        CommonModule,
        TypeTextRoutes,
        HeaderModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        WindowActionModule,
        PreloadersModule,
        ErrorFormModule,
        ReactiveFormsModule,
        NormalPreloadersModule
    ]
})
export class TypeTextModule { }
