import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public loginModel = {
    username: '',
    password: '',
    email: ''
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.Login(this.loginModel).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        // localStorage.setItem('manager', res.user)
        if(res.token) {
          this.router.navigate(['/admin'])
        }
      }
    )

  }
}
