import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Employee } from '../models/employee';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:8080/employee/'

  constructor(private http: HttpClient) { }


  update( employee: Employee){
    return this.http.put(this.url, employee);
  }

  getAllEmployees(): Observable<Employee>{
    return this.http.get<Employee>(this.url);
  }

  addEmployee(employee: Employee){
    return this.http.post(this.url, employee);
  }

  getEmployee(id: number) {
    return this.http.get(this.url + id);
  }
  deleteEmployee(id: number){
    return this.http.delete(this.url + id);
  }

  getEmployeesTasks(id: number): Observable<Task>{
    return this.http.get<Task>(this.url + id + '/tasks');
  }





}
