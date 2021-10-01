import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TypeText} from "../../../../_model/typeText/typeText";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Task} from "../../../../_model/task/task";
import {TaskSetting} from "../../../../_model/task/taskSetting";
import {MatDialog} from "@angular/material/dialog";
import {DeleteActionComponent} from "../../../../window-action/delete-action/delete-action.component";

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnChanges, AfterViewInit {

  @Input() task!: Task[];
  @Output() updatedTask = new EventEmitter();
  @Output() removeTask  = new EventEmitter();

  displayedColumns: string[] = new TaskSetting().data();
  dataSource!: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    this.buildTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildTable();
  }

  updateText(updatedText: any): void {

    this.updatedTask.emit(updatedText);
  }

  deleteItem(typeText: TypeText) {

    const dialogRef = this.dialog.open(DeleteActionComponent, { data: {title: typeText.destination} });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.removeTask.emit(typeText.id);
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
    this.dataSource = new MatTableDataSource(this.task);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
