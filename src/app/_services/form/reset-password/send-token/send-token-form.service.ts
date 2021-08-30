import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SendTokenFormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  data() {
    return this.formBuilder.group({
      user: [null, [Validators.required, Validators.email]]
    });
  }
}
