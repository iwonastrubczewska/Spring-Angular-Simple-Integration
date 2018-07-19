import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
@Input() employee: any;
@Output() reloadList = new EventEmitter<string>();
  constructor(private service: EmployeeService ,private router: Router) { }

  ngOnInit() {
  }

  delete(id){
    this.service.deleteEmployee(id).subscribe(data => {            
      this.reloadList.emit();
    });
}


}
