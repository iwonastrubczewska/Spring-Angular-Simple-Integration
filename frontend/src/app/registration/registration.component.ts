import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit() {
  }

  registration(){
    
     this.service.registration(this.user).subscribe(data =>{
       this.router.navigate(['/login']);
    });
  }

}
