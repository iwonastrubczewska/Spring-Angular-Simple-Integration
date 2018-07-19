import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';
import { Task } from '../models/task';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees-tasks-list',
  templateUrl: './employees-tasks-list.component.html',
  styleUrls: ['./employees-tasks-list.component.css']
})
export class EmployeesTasksListComponent implements OnInit {

  list: Task;
  employee: Employee;
  id: number;
  constructor(private taskService: TaskService, private employeeService: EmployeeService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employeesTasks();
  }

  employeesTasks() {
    this.employeeService.getEmployeesTasks(this.id).subscribe(data => {  
      this.list = data;   
      console.log(this.list);
    });
 
  }
}
