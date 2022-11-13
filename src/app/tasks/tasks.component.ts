import { Component, OnInit } from '@angular/core';
import { CounterServiceService } from '../counter-service.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private counterService:CounterServiceService) { }
  

  ngOnInit(): void {
    let initialTask = new Task(1, "ziemniaki", false);
    this.taskList.push(initialTask);
    this.counter = this.taskList.length;
  }

  counter:number = 0;
  taskList:Array<Task> = [];
  doneTasks:number = 0;

  addTask(): void{
    let name = "ziemniaki" + (this.counter + 1);
    let newTask = new Task (this.taskList[this.taskList.length-1].id +1, name, false)
    this.taskList.push(newTask);
    this.counter = this.counterService.getCounterValue(this.taskList);
  }

  onTaskStatusChange(taskToChange: Task):void{
    taskToChange.isChecked = !taskToChange.isChecked;
    this.doneTasks = this.counterService.getDoneTasksNumber(this.taskList);
  }

}
