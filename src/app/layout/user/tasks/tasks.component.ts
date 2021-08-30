import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from "../../../_services/http/task/task.service";
import {Task} from "../../../_model/task/task";
import {AddTaskComponent} from "./add-task/add-task.component";
import {TaskCacheService} from "../../../_services/cache/task-cache/task-cache.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @ViewChild('addTaskComponent') addTaskComponent!: AddTaskComponent;

  task!: Task[];

  constructor(
    private taskService: TaskService,
    private taskCache: TaskCacheService
  ) { }

  ngOnInit(): void {

    this.prepareLoadTasks();
  }

  prepareLoadTasks() {
    if (this.taskCache.getTasks()){
      this.task = this.taskCache.getTasks();
      return;
    }
    this.loadTaskServer();
  }

  openManagerUpdateTask(task: Task) {
    this.addTaskComponent.openManager(task, true);
  }

  openManagerAddTask() {
    this.addTaskComponent.openManager(new Task());
  }

  removeTask(idTask: string) {
    this.task = this.task.filter((x => x.id !== idTask));
    this.taskService.removeTask(idTask).subscribe();
    this.taskCache.createCache(this.task);
  }

  loadTaskServer() {
    this.taskService.getTasks().subscribe(value => {
      this.task = value;
      this.taskCache.createCache(value);
    });
  }
}
