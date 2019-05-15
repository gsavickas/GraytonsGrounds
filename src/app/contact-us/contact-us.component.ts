import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactor: any;
  constructor( private UserService : UserService ) { }

  ngOnInit() {
  }

}
/* 
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName :"",
    email : "",
    password : ""
  }

  constructor( private UserService : UserService) {
  }

  ngOnInit() {
  }
  // Sent to userService
  onSubmit() {
    console.log(this.user)
    this.UserService.register(this.user).subscribe(res =>{
      console.log(res);
    } );
  }



}
*/