import {Component, OnInit} from '@angular/core';
import {ActiveCard} from "../../_model/enum/activeCard";
import {TransferToken} from "../../_model/retryPassword/transferToken";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  actualActiveCard = ActiveCard.sendToken;
  activeCardEnum   = ActiveCard;

  email!: string;
  transferToken!: TransferToken;

  constructor() { }

  ngOnInit(): void {
  }

  cardCheckingToken(email: string) {
    this.email = email;
    this.actualActiveCard = ActiveCard.checkToken;
  }

  cardNewPassword(transferToken: TransferToken) {
    this.transferToken    = transferToken;
    this.actualActiveCard = ActiveCard.newPassword
  }

}
