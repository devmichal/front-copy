import { Injectable } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Wallet} from "../../../_model/wallet/wallet";

@Injectable({
  providedIn: 'root'
})
export class FormWalletService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  data(wallet: Wallet) {
    return this.formBuilder.group({
      bankName: [wallet.bankName],
      bankNumber: [wallet.bankNumber],
      street: [wallet.street],
      zipCode: [wallet.zipCode],
      city: [wallet.city],
      lastUpdate: [{
        value: wallet.lastUpdate,
        disabled: true
      }],
      earnMoney: [{
        value: wallet.earnMoney,
        disabled: true
      }],
    });
  }
}
