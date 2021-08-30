import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorFormComponent} from "./error-form.component";



@NgModule({
  declarations: [
    ErrorFormComponent
  ],
  exports: [
    ErrorFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorFormModule { }
