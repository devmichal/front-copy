import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NormalPreloadersComponent} from "./normal-preloaders.component";



@NgModule({
  declarations: [
    NormalPreloadersComponent
  ],
  exports: [
    NormalPreloadersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NormalPreloadersModule { }
