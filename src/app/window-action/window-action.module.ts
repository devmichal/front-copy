import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowActionComponent } from './window-action.component';
import { DeleteActionComponent } from './delete-action/delete-action.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { InputTextComponent } from './input-text/input-text.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SelectOptionComponent } from './select-option/select-option.component';
import { InputDateComponent } from './input-date/input-date.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
    declarations: [
        WindowActionComponent,
        DeleteActionComponent,
        InputTextComponent,
        SelectOptionComponent,
        InputDateComponent
    ],
  exports: [
    WindowActionComponent,
    InputTextComponent,
    SelectOptionComponent,
    InputDateComponent
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule
    ]
})
export class WindowActionModule { }
