import { Injectable } from '@angular/core';
import { Task } from '../types';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private TaskList : Array<Task> = []
  private URL : string = 'http://localhost:3000/Tasks'
  constructor(private httpClient : HttpClient) { }
  // get all task get requst 
  getAllTasks()  {
    return this.httpClient.get<Array<Task>>(this.URL)
  }
  // get request 
  getTask(id : number) {
    return this.httpClient.get<Array<Task>>(this.URL+`/${id}`)
  }

  // post requst 
  async addTask(task : Task){
    await firstValueFrom(this.httpClient.post(this.URL , task));
    this.TaskList.push(task)
  }

  // update task put request 
  async updateTask(updatedTask : Task) {
    const id = updatedTask.id
    await firstValueFrom(this.httpClient.put(this.URL+`/${id}` , updatedTask));
  }

  // delete task delete request .
  deleteTask(id : number) { }
}
