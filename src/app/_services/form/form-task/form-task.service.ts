import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Task} from "../../../_model/task/task";

@Injectable({
  providedIn: 'root'
})
export class FormTaskService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildFormTask(task: Task) {
    return this.formBuilder.group({
      titleTask: [task.titleTask, Validators.required],
      deadLineAt: [task.deadLine, Validators.required],
      client: [task.clientId, Validators.required],
      typeText: [task.typeTextId, Validators.required],
      numberCountCharacter: [task.numberCountCharacter, Validators.required],
      status: task.status
    })
  }
}
