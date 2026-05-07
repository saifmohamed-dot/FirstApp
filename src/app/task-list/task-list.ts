import { Component, EventEmitter, Input, OnInit, output, Output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import {Task} from '../types'
import { TaskService } from '../service/task-service';
import { TaskForm } from "../task-form/task-form";

@Component({
  selector: 'app-task-list',
  imports: [TaskCard, TaskForm],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit{
  constructor(private taskService : TaskService){}
  public Tasks : Array<Task> = [];
  private States : Array<string> = ['Tasks Should be Done' , 'Finished Tasks' , 'Updated Tasks' , 'Deleted Tasks']
  private _stateDisplayed:number = 0;
  private _updatedTask : Task | undefined = undefined
  private _openFormUpdateTask : boolean = false
  ngOnInit() {
    this.taskService.getAllTasks().subscribe(tsks => this.Tasks = [...tsks])
  }
  set StateDisplayed(val : number) {
    this._stateDisplayed = val;
  }
  get StateDisplayed() {
    return this._stateDisplayed;
  }
  // @Input() 
  // set submittedTask(data :Task) {
  //   if (!data) return; // undefine .
  //   let idx = this.Tasks.findIndex(d => d.Id == data.Id);
  //   if (idx == -1)
  //     this.Tasks.push(data)
  //   else
  //     this.Tasks[idx] = data;
  // }
  onTaskUpdated(id : string) {
    this.updatingTask = this.Tasks.find(t => t.id === id)
    this.openFormUpdateTask = this.updatingTask !== undefined
  }
  set updatingTask(task : Task | undefined) {
    this._updatedTask = task
  }
  get updatingTask() : Task | undefined {
    return this._updatedTask
  }
  displayDone() { this.StateDisplayed = 1 }
  displayUpdated() { this.StateDisplayed = 2 }
  displayDeleted() { this.StateDisplayed = 3 }
  displayLeft() { this.StateDisplayed = 0 }
  get currentLabel() {
    return this.States[this.StateDisplayed]
  }
  get openFormUpdateTask() {
    return this._openFormUpdateTask
  }
  set openFormUpdateTask(val : boolean) {
    this._openFormUpdateTask = val
  }
  closeModal() {
    this._openFormUpdateTask = false
  }
}
