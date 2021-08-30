import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SendTokenFormService} from "../../../_services/form/reset-password/send-token/send-token-form.service";
import {FormGroup} from "@angular/forms";
import {InteractionField} from "../../../window-action/interactionField";
import {ResetPasswordService} from "../../../_services/http/reset-password/reset-password.service";

@Component({
  selector: 'app-send-token',
  templateUrl: './send-token.component.html',
  styleUrls: ['./send-token.component.scss']
})
export class SendTokenComponent extends InteractionField implements OnInit {

  @Output() changeCard = new EventEmitter();

  constructor(
    private sendTokenForm: SendTokenFormService,
    private resetPassword: ResetPasswordService
  ) {
    super();
  }

  ngOnInit(): void {

    this.formManager = this.sendTokenForm.data();
  }

  submit() {

    this.submitted = true;
    if (this.formManager.invalid) {
      return;
    }

    this.load = true;
    this.resetPassword.sendEmail(this.formManager).subscribe(value => {

      this.load = false;
      this.changeCard.emit(this.formManager.value.user);
    }, error => {
      this.load = false;
    });
  }

}
