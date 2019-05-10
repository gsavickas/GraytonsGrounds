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
  private uri = 'http://localHost:3000'
  private allUsers: Object [];


  constructor(private router: Router, private http: HttpClient) { }
  // This adds a User
  register(user: User) {
    console.log("hello", user.firstName);
    // Trying to store user objects as arrays
    // if (this.getUsers() != [])
    // {
    //   this.allUsers = getUsers() 
    // }
    // this.allUsers.forEach(i => {
    //   if (this.allUsers[i] == this.newUser)
    //   {
    //     return;
    //   } 
    // });
    
    return this.http.post('${this.uri}/register', user);
  };
  setUsername(user: User) {
    this.userName = (user.firstName + user.lastName);
    this.userOn = true;
    this.router.navigate(['coffee/main']);
  }
  getUsers(){ 
    return this.http.get(`${this.uri}/users`)
  }
  getUserByEmail(email){

  }
  login() {
    console.log("Login Works");
  }
  
}
