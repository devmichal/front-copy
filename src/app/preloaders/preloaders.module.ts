import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadersComponent} from "./preloaders.component";



@NgModule({
  declarations: [
    PreloadersComponent
  ],
  exports: [
    PreloadersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PreloadersModule { }
