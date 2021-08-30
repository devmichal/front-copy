import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Clients} from "../../../_model/client/clients";

@Injectable({
  providedIn: 'root'
})
export class FormClientService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  data(client: Clients) {
    return this.formBuilder.group({
      name: [client.name, Validators.required],
      city: [client.city, Validators.required],
      street: [client.street, Validators.required],
      zipCode: [client.zipCode, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      taxNumber: [client.taxNumber],
      salary: [client.salary, Validators.required],
      gross: client.gross
    });
  }
}
