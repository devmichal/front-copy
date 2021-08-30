import {Component, HostListener, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-window-action',
  templateUrl: './window-action.component.html',
  styleUrls: ['./window-action.component.scss']
})
export class WindowActionComponent {

  @Output() closeManager = new EventEmitter();

  @HostListener('document:click', ['$event'])  onDocumentClick(event: any) {

    const classElement = event.srcElement.className;
    if (classElement.includes('show__task')) {

      this.closeManager.emit();
    }
  }

  closerManager() {

    this.closeManager.emit();
  }
}
