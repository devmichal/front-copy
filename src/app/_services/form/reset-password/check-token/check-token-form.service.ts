import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CheckTokenFormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  data(email: string) {
    return this.formBuilder.group({
      user: email,
      userToken: [null, Validators.required]
    });
  }
}
