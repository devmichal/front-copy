import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {TypeText} from "../../../_model/typeText/typeText";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TypeTextService {

  constructor(
    private http: HttpClient
  ) { }

  getTypeText() {
    return this.http.get<TypeText[]>(`${environment.api}/typeText`);
  }

  createTypeText(formData: FormGroup) {
    return this.http.post(`${environment.api}/typeText`, formData.value);
  }

  updateTypeText(formData: FormGroup, idTypeText: string) {
    return this.http.put(`${environment.api}/typeText/${idTypeText}`, formData.value);
  }
}
