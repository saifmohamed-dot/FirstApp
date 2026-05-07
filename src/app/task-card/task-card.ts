import { Component, EventEmitter, Input,Output} from '@angular/core';
import {Task} from '../types'
import { TaskService } from '../service/task-service';
@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})

export class TaskCard {
  private _task : any;
  constructor(private taskService : TaskService){}
  @Input() 
  set Task(data : Task) {
    this._task = data;
  }
  get Task() : Task{
    return this._task;
  }
  @Output() TaskUpdatedEmitter = new EventEmitter<string>()
  doneTask() { 
    this.Task.State = 1 
    this.taskService.updateTask(this.Task)
  }
  upateTask() { 
    this.TaskUpdatedEmitter.emit(this.Task.id)
  }
  deleteTask() { 
    this.Task.State = 3 
    this.taskService.updateTask(this.Task) // soft delete .
  }
}
