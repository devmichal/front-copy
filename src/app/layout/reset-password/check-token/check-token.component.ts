import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {CheckTokenFormService} from "../../../_services/form/reset-password/check-token/check-token-form.service";
import {ResetPasswordService} from "../../../_services/http/reset-password/reset-password.service";
import {InteractionField} from "../../../window-action/interactionField";
import {TransferToken} from "../../../_model/retryPassword/transferToken";

@Component({
  selector: 'app-check-token',
  templateUrl: './check-token.component.html',
  styleUrls: ['./check-token.component.scss']
})
export class CheckTokenComponent extends InteractionField implements OnInit {

  @Input() email!: string;
  @Output() changeCard = new EventEmitter();

  errorMessage!: string;

  constructor(
    private checkTokenForm: CheckTokenFormService,
    private resetPassword: ResetPasswordService
  ) {
    super();
  }

  ngOnInit(): void {
    this.formManager = this.checkTokenForm.data(this.email);
  }

  submit() {

    this.submitted = true;
    if (this.formManager.invalid) {
      return;
    }

    this.load = true;
    this.sendToConfirm();
  }

  private sendToConfirm() {
    this.resetPassword.sendToken(this.formManager).subscribe(value => {

      this.load = false;
      this.changeCard.emit(
        new TransferToken(this.formManager.value.userToken, value));
    },error => {

      this.load = false;
      this.errorMessage = error.error;
    });
  }

}
