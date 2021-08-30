import {AfterViewInit, Component, Input, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Clients} from "../../../../_model/client/clients";
import {ClientSettings} from "../../../../_model/client/clientSettings";

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnChanges, AfterViewInit {

  displayedColumns: string[] = new ClientSettings().data();
  dataSource!: MatTableDataSource<Clients>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() client!: Clients[];

  @Output() createPdf = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildTable();
  }

  ngAfterViewInit(): void {
    this.buildTable();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateClient(client: Clients) {
    this.update.emit(client);
  }

  deleteItem(data: Clients) {
    this.remove.emit(data.id);
  }

  reportPdf(clients: Clients) {
    this.createPdf.emit(clients);
  }

  private buildTable() {
    this.dataSource = new MatTableDataSource(this.client);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
