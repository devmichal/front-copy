import { Component, OnInit } from '@angular/core';
import {WalletService} from "../../../_services/http/wallet/wallet.service";
import {Wallet} from "../../../_model/wallet/wallet";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  wallet!: Wallet;
  isLoaded = false;

  constructor(
    private walletService: WalletService
  ) { }

  ngOnInit(): void {
    this.isLoaded = false;
    this.getWallet();
  }

  getWallet() {
    this.walletService.getWallet().subscribe(value => {
      this.wallet = value;
      this.isLoaded = true;
    });
  }
}
