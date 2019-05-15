import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLogged:boolean;
  isSigned:boolean;

  constructor(private router: Router, private userService: UserService) { 
    this.userService.isLogged.subscribe(val =>{
      this.isLogged = val;
    })
  }
  

  ngOnInit() {
  }



}
