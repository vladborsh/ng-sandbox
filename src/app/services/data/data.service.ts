import { Injectable } from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  changeUsd = new Subject<number>();
  changeYen = new Subject<number>();
  constructor() {
  }
  getUsd() {
    return this.changeUsd;
  }
  setUsd(data) {
    this.changeUsd.next(data);
  }
  getYen() {
    return this.changeYen;
  }
  setYen(data) {
    this.changeYen.next(data);
  }
}
