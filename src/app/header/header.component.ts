import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() clickButton = new EventEmitter();
  @Input() dataServer: any;

  actionButton() {
    this.clickButton.emit();
  }

  get isLoading(): boolean{
    return !!this.dataServer;
  }

}
