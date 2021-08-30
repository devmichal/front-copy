import {Component, Output, EventEmitter} from '@angular/core';
import {InteractionField} from "../../../../window-action/interactionField";
import {FormTaskService} from "../../../../_services/form/form-task/form-task.service";
import {Task} from "../../../../_model/task/task";
import {TaskService} from "../../../../_services/http/task/task.service";
import {TaskTally} from "../../../../_model/task/taskTally";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent extends InteractionField {

  @Output() newTask = new EventEmitter();
  taskTally!: TaskTally;
  task!: Task;

  constructor(
    private fromTask: FormTaskService,
    private taskService: TaskService
  ) {
    super();
  }

  openManager(task: Task, isEdited: boolean = false) {
    this.addAction();
    this.getTallySupport();
    this.task = task;
    this.isEdited = isEdited
    return this.formManager = this.fromTask.buildFormTask(task);
  }

  getTallySupport() {
    this.taskService.getTallyComponent().subscribe(value => {
      this.taskTally = value;
    })
  }

  submit() {
    if (!this.formManager.valid){
      this.submitted = true;
      return;
    }

    this.executing = true

    if (this.isEdited){
      this.updateTask();
      return;
    }
    this.addTask();
  }

  private addTask() {

    this.taskService.addTask(this.formManager).subscribe(value => {
      this.closeAction();
      this.newTask.emit(true);
    });
  }

 private updateTask() {

    this.taskService.updateTask(this.formManager, this.task.id).subscribe(value => {
      this.closeAction();
      this.newTask.emit(true);
    });
  }

}
