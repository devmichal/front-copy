import { Injectable } from '@angular/core';
import {CacheSupportService} from "../cache-support.service";
import {Task} from "../../../_model/task/task";

@Injectable({
  providedIn: 'root'
})
export class TaskCacheService extends CacheSupportService {

  cache = 'task-data';

  getTasks(): Task[] {
    return this.getCache(this.cache);
  }

  createCache(taskCache: Task[]): void {
    this.addCache(this.cache, taskCache);
  }

  deleteCache(): void {
    this.removeCache(this.cache);
  }
}
