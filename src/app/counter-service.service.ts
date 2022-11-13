import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  constructor() { }

  getCounterValue(list:Array<any>) : number {
    return list.length;
  };
}
