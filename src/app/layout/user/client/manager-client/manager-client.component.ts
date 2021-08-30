import {Component, Output, EventEmitter} from '@angular/core';
import {InteractionField} from "../../../../window-action/interactionField";
import {FormClientService} from "../../../../_services/form/form-client/form-client.service";
import {Clients} from "../../../../_model/client/clients";
import {ClientsService} from "../../../../_services/http/client/clients.service";

@Component({
  selector: 'app-manager-client',
  templateUrl: './manager-client.component.html',
  styleUrls: ['./manager-client.component.scss']
})
export class ManagerClientComponent extends InteractionField {

  constructor(
    private formClient: FormClientService,
    private clientService: ClientsService
  ) {
    super();
  }

  client!: Clients;

  @Output() refreshData = new EventEmitter();

  openManager(client: Clients, isUpdate: boolean = false) {
    this.manager     = true;
    this.client      = client;
    this.isEdited    = isUpdate;
    this.formManager = this.formClient.data(client);
  }

  submit() {

    this.submitted = true;
    if (this.formManager.invalid){
      return;
    }

    this.executing = true;

    if (this.isEdited){
      this.updateClient();
      return;
    }
    this.addClient();
  }

  private updateClient() {
    this.clientService.updateClients(this.formManager, this.client.id).subscribe(value => {
      this.closeAction();
      this.refreshData.emit();
    });
  }

  private addClient() {
    this.clientService.addClients(this.formManager).subscribe(value => {
      this.refreshData.emit();
      this.closeAction();
    });
  }

}
