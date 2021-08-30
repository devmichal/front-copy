import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TypeText} from "../../../../_model/typeText/typeText";
import {MatDialog} from "@angular/material/dialog";
import {DeleteActionComponent} from "../../../../window-action/delete-action/delete-action.component";
import {TypeTextSetting} from "../../../../_model/typeText/typeTextSetting";

@Component({
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.scss']
})
export class TextTableComponent implements OnChanges, AfterViewInit {

  displayedColumns: string[] = new TypeTextSetting().data();

  @Output() openManager = new EventEmitter();
  @Input() typeText!: TypeText[];
  dataSource!: MatTableDataSource<TypeText>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  objectTypeText!: TypeText[];

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngAfterViewInit(): void {
     this.buildTable();
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildTable();
  }

  updateText(updatedText: any): void {

     this.openManager.emit(updatedText);
  }

  deleteItem(typeText: TypeText) {

    const dialogRef = this.dialog.open(DeleteActionComponent, {
      data: {title: typeText.destination}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {

      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private buildTable() {
    this.dataSource = new MatTableDataSource(this.typeText);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
