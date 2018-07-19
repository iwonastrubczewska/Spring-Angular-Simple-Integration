import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:8080/task/'

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task>{
    return this.http.get<Task>(this.url);
  }

  getTask(id: number): Observable<Task>{
    return this.http.get<Task>(this.url + id );
  }

  deleteTask(id: number){
    return this.http.delete(this.url + id );
  }

  addTask(task: Task){
    return this.http.post(this.url, task);
  }

  update(task:Task){
    return this.http.put(this.url , task);
  }


}
