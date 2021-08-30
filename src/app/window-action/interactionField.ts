import {FormGroup} from "@angular/forms";

export abstract class InteractionField {
  executing = false;
  submitted = false;
  manager   = false;
  isEdited  = false;

  load = false;

  formManager!: FormGroup;

  closeAction() {
    this.submitted = false
    this.executing = false;
    this.manager   = false;
    this.isEdited  = false;
  }

  updateAction() {
     this.isEdited = true;
     this.manager  = true;
  }

  addAction() {
    this.isEdited = false;
    this.manager  = true;
  }

  get valid() { return this.formManager.controls; }
}
