import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user: User = {
  firstName:  "",
  lastName: "",
  email: "",
  password: ""
};
  constructor() { }

  ngOnInit() {
  }

}
