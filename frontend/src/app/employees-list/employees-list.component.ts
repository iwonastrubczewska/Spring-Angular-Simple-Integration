import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeesList: any;

  constructor(private service: EmployeeService) { }

  getData() {
    this.service.getAllEmployees().subscribe(data => {
      this.employeesList = data;
      console.log(this.employeesList)
    });
  }


  ngOnInit() {
    this.getData();
  }

}
