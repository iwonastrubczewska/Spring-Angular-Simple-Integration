import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url: string = "http://localhost:8080/users"
  constructor(private http: HttpClient) { }

  registration(user : User){
    return this.http.post(this.url + '/sign-up', user);
  }
}
