import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
employee = {};
  constructor(private service: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getEmployee(this.route.snapshot.params['id']).subscribe(data => {
      this.employee = data;
      console.log(this.employee)
    })
  }


  update(id, data){
    this.service.update(data).subscribe(result => {
      let id = result['id'];
      this.router.navigate(['']);
    })
  }

}
