import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private counterService:CounterServiceService) { }
  

  ngOnInit(): void {
    this.taskList.push("ziemniaki");
    this.counter = this.taskList.length;
  }

  counter:number = 0;
  taskList:Array<any> = [];

  addTask(): void{
    let name = "ziemniaki" + (this.counter + 1);
    this.taskList.push(name);
    this.counter = this.counterService.getCounterValue(this.taskList);
  }

  checkAsDone():void{

  }
}
