import { Injectable } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  constructor() { }

  getCounterValue(list:Array<any>) : number {
    return list.length;
  };

  getDoneTasksNumber(tasks:Array<Task>) : number{
    let numberOfCheckedTasks: number = 0;
    tasks.forEach(task => {
      if (task.isChecked){
        numberOfCheckedTasks++;
      }

    })
    return numberOfCheckedTasks;

  }
}
