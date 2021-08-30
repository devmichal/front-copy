import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Task} from "../../../_model/task/task";
import {TaskTally} from "../../../_model/task/taskTally";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks() {
    return this.http.get<Task[]>(`${environment.api}/task`);
  }

  getTallyComponent() {
    return this.http.get<TaskTally>(`${environment.api}/task/component`);
  }

  addTask(formManager: FormGroup) {
    return this.http.post(`${environment.api}/task`, formManager.value);
  }

  updateTask(formManager: FormGroup, idTask: string) {
    return this.http.put(`${environment.api}/task/${idTask}`, formManager.value);
  }

  removeTask(idTask: string) {
    return this.http.delete(`${environment.api}/task/${idTask}`);
  }
}
