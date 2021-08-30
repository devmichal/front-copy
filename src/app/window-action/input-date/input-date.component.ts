import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

  @Input() FormManager!: FormGroup;
  @Input() nameInput!: string;
  @Input() label!: string;
  @Input() invalid!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
