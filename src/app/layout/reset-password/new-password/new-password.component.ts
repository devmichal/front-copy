import {Component, Input, OnInit} from '@angular/core';
import {InteractionField} from "../../../window-action/interactionField";
import {TransferToken} from "../../../_model/retryPassword/transferToken";
import {NewPasswordFormService} from "../../../_services/form/reset-password/new-password/new-password-form.service";
import {ResetPasswordService} from "../../../_services/http/reset-password/reset-password.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent extends InteractionField implements OnInit {

  @Input() email!: string;
  @Input() transferToken!: TransferToken;

  constructor(
    private newPassword: NewPasswordFormService,
    private resetPassword: ResetPasswordService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.formManager = this.newPassword.data(this.transferToken, this.email);
  }

  submit() {

    this.submitted = true;
    if (this.formManager.invalid) {
      return;
    }

    this.load = true;
    this.sendPassword();
  }

  private sendPassword() {

    this.resetPassword.newPassword(this.formManager).subscribe(value => {

      this.load = false;
      this.router.navigate(['/login']);
    }, error => {
      this.load = false;
    })
  }

}
