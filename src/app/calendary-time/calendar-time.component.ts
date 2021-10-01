import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Clients} from "../_model/client/clients";

@Component({
  selector: 'app-calendary-time',
  templateUrl: './calendar-time.component.html',
  styleUrls: ['./calendar-time.component.scss']
})
export class CalendarTimeComponent implements OnInit {

  color = ['warn', 'warn', 'primary']

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public client: Clients) {}

  ngOnInit(): void {

    console.log(this.client.name);
  }

}
