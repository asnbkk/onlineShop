import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public loginModel = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginModel)
    this.userService.Login(this.loginModel)
  }
}
