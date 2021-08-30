import {Component, OnInit, ViewChild} from '@angular/core';
import {ManagerClientComponent} from "./manager-client/manager-client.component";
import {ClientsService} from "../../../_services/http/client/clients.service";
import {Clients} from "../../../_model/client/clients";
import {ClientCacheService} from "../../../_services/cache/client-cache/client-cache.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @ViewChild('managerClientComponent') managerClientComponent!: ManagerClientComponent;

  clients!: Clients[];

  constructor(
    private clientService: ClientsService,
    private clientCache:ClientCacheService
  ) { }

  ngOnInit(): void {
    this.prepareLoadClients();
  }

  prepareLoadClients() {
    if (this.clientCache.getClients()) {
      this.clients = this.clientCache.getClients();
      return;
    }
    this.loadClientServer();
  }

  openManagerAddClient() {
    this.managerClientComponent.openManager(new Clients());
  }

  openManagerUpdateClient(client: Clients){
    this.managerClientComponent.openManager(client, true);
  }

  removeClient(idClient: string) {
    this.clients = this.clients.filter((x => x.id !== idClient));
    this.clientService.removeClient(idClient);
    this.clientCache.createCache(this.clients);
  }

  createPdf(clients: Clients) {
    const date = new Date();
    const actualDate = date.getFullYear()+'-'+date.getMonth();

    this.clientService.generateReports(clients.id).subscribe(data => {

      const downloadURL = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'raport-'+actualDate+'-'+clients.name+'.pdf';
      link.click();
    });
  }

  loadClientServer() {
    this.clientService.getClients().subscribe(value => {
      this.clients = value;
      this.clientCache.createCache(value);
    });
  }
}
