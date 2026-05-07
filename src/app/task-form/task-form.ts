import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../types';
import { TaskService } from '../service/task-service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm  {
  constructor(private taskService: TaskService){}
  public Task : Task = new Task();
  @Output() taskEmitter = new EventEmitter<Task>();
  // onAddTask() {
  //   this.taskEmitter.emit(this.Task);
  //   this.Task = new Task(); // reference resuse ( no multiple add)
  // }
  onAddTask() {
    if (this.Task.id == '') // new task added .
      this.taskService.addTask(this.Task);
    else {
      this.Task.State = 2
      this.taskService.updateTask(this.Task) // update task .
    }

    this.Task = new Task(); // reference resuse ( no multiple add)
  }
  get formTitle() : string {
    return (this.Task.id == '') ? 'Add Task' : 'Update Task'
  }
  @Input()
  set UpdateTask(taskUpdated : Task | undefined) {
    if (taskUpdated == undefined)
      return
    this.Task = taskUpdated;
  }
}
