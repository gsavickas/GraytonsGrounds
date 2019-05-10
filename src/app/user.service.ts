import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

//import { GG_SPA } from 'GG_SPA/models/users.model.js';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private newUser: User;
  private userOn: boolean = false;
  private userName: String;

  private allUsers: Object [];


  constructor(private router: Router, private http: HttpClient) { }
  // This adds a User
  register(user: User) {
    console.log("hello", user.firstName);
    return this.http.post(`users/register`, user);
  };
  setUsername(user: User) {
    this.userName = (user.firstName + user.lastName);
    this.userOn = true;
    this.router.navigate(['coffee/main']);
  }
  getUsers(){ 
    return this.http.get(`/users/all`)
  }
  getUserByEmail(email){

  }
  login(user: User) {
    console.log("Login Works");
    return this.http.post(`users/login`, user);
  }
  
}
