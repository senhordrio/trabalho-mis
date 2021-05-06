import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { CityHistory } from '../entities/history';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public clearAll() {
    this.storage.clear();
  }

  public async getAll(): Promise<any> {
    const history: CityHistory[] = [];
    this.storage.forEach((key, value) => {
      const obj: CityHistory = { id: value, name: key };
      history.push(obj);
    });
    return history;
  }
}
