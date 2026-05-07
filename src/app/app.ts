import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';
import { Slider } from './slider/slider';
import { Task } from './types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Header , Footer , TaskForm , TaskList , Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public submittedTaskShared : any = null;
  public updatedTaskFromTaskList : Task = new Task();
  onTaskSubmitted(data : Task) {
    this.submittedTaskShared = data;
  }
  onTaskUpdatedFromList(data : Task) {
    this.updatedTaskFromTaskList = data;
  }
}
