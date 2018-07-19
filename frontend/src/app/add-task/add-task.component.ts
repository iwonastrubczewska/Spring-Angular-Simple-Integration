import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';
import { Task } from '../models/task';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  toDo: string;
  deadline: string;
  employee: any;

  constructor(private taskService: TaskService, private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.employeeService.getEmployee(this.route.snapshot.params['id']).subscribe(data => {
      this.employee = data;
      this.task.employee=this.employee;
      console.log(this.employee)
    });
}

  add() {
    let newTask = {

      id: this.task.id,
      toDo: this.task.toDo,
      deadline: this.task.deadline,
      employee: this.task.employee

    }
    
    this.taskService.addTask(newTask).subscribe(data => {    
      this.router.navigate(['']); 
    });
 
  }

}
