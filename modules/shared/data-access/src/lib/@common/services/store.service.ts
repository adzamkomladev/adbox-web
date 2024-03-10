import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  set(key: string, data: Record<any, any>) {
    if (!data) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string): any | null {
    const data = localStorage.getItem(key);

    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      console.log(e, 'FAILED TO SET DATA');

      return null;
    }
  }

  clear(key: string) {
    localStorage.removeItem(key);
  }
}
