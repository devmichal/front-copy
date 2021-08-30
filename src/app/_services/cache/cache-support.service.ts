import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class CacheSupportService {

  protected getCache(key: string): any {
    return JSON.parse(<string>sessionStorage.getItem(key));
  }

  protected addCache(key: string, dataCache: any): void {
    sessionStorage.setItem(key, JSON.stringify(dataCache));
  }

  protected removeCache(key: string): void {
    sessionStorage.removeItem(key);
  }
}

