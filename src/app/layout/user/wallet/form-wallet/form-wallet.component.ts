import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormWalletService} from "../../../../_services/form/form-wallet/form-wallet.service";
import {Wallet} from "../../../../_model/wallet/wallet";
import {WalletService} from "../../../../_services/http/wallet/wallet.service";

@Component({
  selector: 'app-form-wallet',
  templateUrl: './form-wallet.component.html',
  styleUrls: ['./form-wallet.component.scss']
})
export class FormWalletComponent implements OnInit {

  @Input() wallet!: Wallet;

  formGroup!: FormGroup;
  submitted = false;
  executing = false;

  constructor(
    private walletForm: FormWalletService,
    private walletService: WalletService
  ) { }

  ngOnInit(): void {
   this.formGroup = this.walletForm.data(this.wallet);
  }

  submit() {
    if (!this.formGroup.valid){
      this.submitted = true;
      return;
    }

    this.executing = true;

    this.walletService.putWallet(this.formGroup).subscribe(value => {
      this.wallet = this.formGroup.value;
      this.executing = false;
    },error => {
      this.executing = false;
    });
  }
}
