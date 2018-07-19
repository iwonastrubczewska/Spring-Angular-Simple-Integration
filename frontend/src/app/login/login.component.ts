import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  
  login(){
    this.service.login(this.user);
    setTimeout(() => 
    {
    this.router.navigate(['/']);
    },
    500);


  }

 
 
}
