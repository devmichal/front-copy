import {Component, OnInit, ViewChild} from '@angular/core';
import {ManagerClientComponent} from "./manager-client/manager-client.component";
import {ClientsService} from "../../../_services/http/client/clients.service";
import {Clients} from "../../../_model/client/clients";
import {ClientCacheService} from "../../../_services/cache/client-cache/client-cache.service";
import {MatDialog} from "@angular/material/dialog";
import {CalendarTimeComponent} from "../../../calendary-time/calendar-time.component";

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
    private clientCache:ClientCacheService,
    public dialog: MatDialog
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

    const dialogRef = this.dialog.open(CalendarTimeComponent, {
      data: {name: clients.name}
    });

    dialogRef.afterClosed().subscribe(result => {

      const startDate  = result.start ? ClientComponent.aggregateDate(result.start) : null;
      const finishDate = result.end ? ClientComponent.aggregateDate(result.end) : null;

      this.generateReport(clients, startDate, finishDate);
    });
  }

  loadClientServer() {
    this.clientService.getClients().subscribe(value => {
      this.clients = value;
      this.clientCache.createCache(value);
    });
  }

   private static aggregateDate(date: Date): string {

    let d = new Date(date);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    return `${ye}-${mo}-${da}`;
  }

  private generateReport(clients: Clients, startDate: any = null, finishDate: any = null) {

    const actualDate = ClientComponent.aggregateDate(new Date());
    this.clientService.generateReports(clients.id, startDate, finishDate).subscribe(data => {

      const downloadURL = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'raport-'+actualDate+'-'+clients.name+'.pdf';
      link.click();
    });
  }

}
