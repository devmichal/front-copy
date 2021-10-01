import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarTimeComponent } from './calendar-time.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {WindowActionModule} from "../window-action/window-action.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CalendarTimeComponent
  ],
  exports: [
    CalendarTimeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    WindowActionModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ]
})
export class CalendarTimeModule { }
