import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TransferToken} from "../../../../_model/retryPassword/transferToken";

@Injectable({
  providedIn: 'root'
})
export class NewPasswordFormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  data(transferData: TransferToken, email: string) {
    return this.formBuilder.group({
      user: email,
      userToken: transferData.userToken,
      tokenCsrf: transferData.tokenCsrf,
      newPassword: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(20)]],
      retryNewPassword: null
    });
  }
}
