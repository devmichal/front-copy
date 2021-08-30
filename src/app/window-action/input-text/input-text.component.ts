import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() FormManager!: FormGroup;
  @Input() nameInput!: string;
  @Input() label!: string;
  @Input() invalid!: any;
  @Input() typeText: string = 'text';

  constructor() { }

  ngOnInit(): void {
  }

}
