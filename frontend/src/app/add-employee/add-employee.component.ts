import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
 
  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  add() {
    let newEmployee = {
      id: this.employee.id,
      name: this.employee.name,
      surname: this.employee.surname,
      email: this.employee.email,
      tasks: this.employee.tasks

    }

    this.service.addEmployee(newEmployee).subscribe(data => {    
      this.router.navigate(['']); 
    });
  }

}
