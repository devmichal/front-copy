import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-action',
  templateUrl: './delete-action.component.html',
  styleUrls: ['./delete-action.component.scss']
})
export class DeleteActionComponent {

  constructor(public dialogRef: MatDialogRef<DeleteActionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
  //  this.dataService.deleteIssue();
  }

}
