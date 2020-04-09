import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../assets/interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }
  private url = 'api/user/'
  
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Login(loginInfo): Observable<User> {
    return this.http.post<User>(this.url+'login', loginInfo, this.httpHeaders)
  }

  Register(registerInfo): Observable<User> {
    return this.http.post<User>(this.url+'register', registerInfo, this.httpHeaders)
  }
}
