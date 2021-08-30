import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferTextService {

  private newText = new Subject<boolean>();
  $newTextType = this.newText.asObservable();

  setInfo(bol: boolean) {
    this.newText.next(bol);
  }
}
