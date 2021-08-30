import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import {WalletRouting} from "./wallet-routing";
import {HeaderModule} from "../../../header/header.module";
import {TypeTextModule} from "../type-text/type-text.module";
import { FormWalletComponent } from './form-wallet/form-wallet.component';
import {ReactiveFormsModule} from "@angular/forms";
import {WindowActionModule} from "../../../window-action/window-action.module";
import {NormalPreloadersModule} from "../../../normal-preloaders/normal-preloaders.module";
import {PreloadersModule} from "../../../preloaders/preloaders.module";



@NgModule({
  declarations: [
    WalletComponent,
    FormWalletComponent
  ],
    imports: [
        CommonModule,
        WalletRouting,
        HeaderModule,
        TypeTextModule,
        ReactiveFormsModule,
        WindowActionModule,
        NormalPreloadersModule,
        PreloadersModule
    ]
})
export class WalletModule { }
