import { Injectable } from '@angular/core';
import {CacheSupportService} from "../cache-support.service";
import {TypeText} from "../../../_model/typeText/typeText";

@Injectable({
  providedIn: 'root'
})
export class TypeTextCacheService extends CacheSupportService {

  cache = 'type-text-data';

  getTypeText(): TypeText[] {
    return this.getCache(this.cache);
  }

  createCache(taskCache: TypeText[]): void {
    this.addCache(this.cache, taskCache);
  }

  deleteCache(): void {
    this.removeCache(this.cache);
  }
}
