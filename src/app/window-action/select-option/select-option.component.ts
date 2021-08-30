import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit, AfterViewInit{

  @Input() formManager!: FormGroup;
  @Input() loops: any;
  @Input() label!: string;
  @Input() iterableName: string = 'name';
  @Input() inputName: string = 'client';
  @Input() selectedOption!: string;

  ngAfterViewInit(): void {
   // console.log('ngAfterViewInit');
  }


  ngOnInit(): void {
    //console.log('ngOnInit');
  }

}
