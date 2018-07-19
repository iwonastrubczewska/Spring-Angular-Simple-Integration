import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

url: string = "http://localhost:8080/"
  constructor(private http: HttpClient) { }
  private logged = new Subject<boolean>();

  check(): Observable<any> {
    return this.logged.asObservable();
  }

  login(user: User) {
    return this.http.post(this.url + "login", user, {observe: 'response'}).subscribe(data => {
      localStorage.setItem('user', data.headers.get("Authorization"));
      this.logged.next(true);
    });
}

  logout() {
      localStorage.removeItem('user');
      this.logged.next(false);
    
  }

}

