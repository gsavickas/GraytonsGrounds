import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';

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

  constructor(private UserService : UserService) { }

  ngOnInit() {
  }
  // Sent to userService
  onSubmit() {
    console.log(this.user)
    this.UserService.login(this.user).subscribe(res =>{
      console.log(res);
    } );
  }
}
