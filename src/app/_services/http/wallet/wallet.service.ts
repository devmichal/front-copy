import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Wallet} from "../../../_model/wallet/wallet";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(
    private http: HttpClient
  ) { }

  getWallet() {
    return this.http.get<Wallet>(`${environment.api}/wallet`);
  }

  putWallet(formWallet: FormGroup) {
    return this.http.put(`${environment.api}/wallet`, formWallet.value);
  }
}
