import { Injectable } from '@angular/core';
import {CacheSupportService} from "../cache-support.service";
import {Clients} from "../../../_model/client/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientCacheService extends CacheSupportService{

  cache = 'client-data';

  getClients(): Clients[] {
    return this.getCache(this.cache);
  }

  createCache(clientsCache: Clients[]): void {
    this.addCache(this.cache, clientsCache);
  }

  deleteCache(): void {
    this.removeCache(this.cache);
  }
}
