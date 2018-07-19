import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private logged: boolean 
  
  constructor(private service : AuthenticationService) {};

  ngOnInit() {
    if(localStorage.getItem('user'))
    this.logged = true;
    else this.logged = false;
    this.service.check().subscribe(data =>{
       this.logged = data 
      }); 
  }
 

  logout() {
    console.log(localStorage.getItem('user'));
    this.service.logout();
    this.logged = false ;
   // localStorage.removeItem('user');
}

}
