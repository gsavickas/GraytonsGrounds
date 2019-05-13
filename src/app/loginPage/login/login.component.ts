import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName :"",
    email : "",
    password : ""
  }
  error: boolean = false;

  constructor(private UserService : UserService) { }

  ngOnInit() {
  }
  // Sent to userService
  onSubmit() {
    console.log(this.user)
    this.UserService.login(this.user).subscribe(res =>{
      if (res['err'])
      {
        console.log(res['error'])
      }
      else
      {

      }

    } );
  }
}
