import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Clients} from "../../../_model/client/clients";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient
  ) { }

  getClients() {
    return this.http.get<Clients[]>(`${environment.api}/client`);
  }

  addClients(formData: FormGroup) {
    return this.http.post(`${environment.api}/client`, formData.value);
  }

  updateClients(formData: FormGroup, idClient: string) {
    return this.http.put(`${environment.api}/client/${idClient}`, formData.value);
  }

  removeClient(idClient: string) {
    return this.http.delete(`${environment.api}/client/${idClient}`);
  }

  generateReports(client: string) {
    return this.http.get(`${environment.api}/pdf/report/${client}`,{
      responseType: 'blob'
    })
  }
}
