import {Component, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TypeTextService} from "../../../../_services/http/typeText/type-text.service";
import {TypeText} from "../../../../_model/typeText/typeText";
import {InteractionField} from "../../../../window-action/interactionField";

@Component({
  selector: 'app-add-type-text',
  templateUrl: './add-type-text.component.html',
  styleUrls: ['./add-type-text.component.scss']
})
export class AddTypeTextComponent extends InteractionField {

  @Output() actionText = new EventEmitter();

  typeText!: TypeText;

  constructor(
    private formBuilder: FormBuilder,
    private typeTextService: TypeTextService,
  ) {
    super();
  }

  buildForm() {
    this.formManager = this.formBuilder.group({
      destination: [this.typeText.destination, Validators.required]
    });
  }

  closeManager() {
    this.manager = false;
  }

  updateText(typeText: TypeText) {
    this.updateAction();
    this.typeText = typeText;
    this.buildForm();
  }

  newText() {
    this.addAction();
    this.typeText = new TypeText();
    this.buildForm();
  }

  addText() {

    this.submitted = true;
    if (this.formManager.invalid) {
      return;
    }

    this.executing = true;
    if (this.isEdited) {
      this.updateOld();
      return;
    }
    this.addNew();
  }

  addNew() {

    this.typeTextService.createTypeText(this.formManager).subscribe(value => {

      this.closeAction();
      this.actionText.emit()
    },error => {
      this.closeAction();
    });
  }

  updateOld() {

    const idTypeText = this.typeText.id;
    this.typeTextService.updateTypeText(this.formManager, idTypeText).subscribe(value => {

      this.closeAction()
      this.actionText.emit();
    }, error => {
      this.closeAction();
    });
  }

}
