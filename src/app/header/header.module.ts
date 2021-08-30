import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {CutIdPipe} from "./cut-id/cut-id.pipe";
import {NormalPreloadersModule} from "../normal-preloaders/normal-preloaders.module";



@NgModule({
    declarations: [
        HeaderComponent,
        CutIdPipe
    ],
    exports: [
        HeaderComponent,
        CutIdPipe
    ],
  imports: [
    CommonModule,
    NormalPreloadersModule
  ]
})
export class HeaderModule { }
