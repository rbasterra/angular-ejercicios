import { Router } from '@angular/router';
import { User, UserSignUp, UserLogged } from './../../models/User/User.models';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, tap, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userAuthenticated: ReplaySubject<UserLogged | undefined> = new ReplaySubject<UserLogged | undefined>();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true //this is required so that Angular returns the Cookies received from the server. The server sends cookies in Set-Cookie header. Without this, Angular will ignore the Set-Cookie header
  };

  constructor(private httpClient: HttpClient, private router: Router) { }

  public authenticateUser(data:User){
    
    return this.httpClient.post<UserLogged>(`${environment.userApiUrl}/user/login`, data, this.httpOptions).pipe(tap((res:UserLogged) =>{
      
      if(res.email){
        const user = JSON.stringify({__id: res._id, email: res.email, name: res.name, lastname: res.lastname, __v: res.__v});
        localStorage.setItem('userInfo', user);
        this.userAuthenticated.next(res);
      }
    }))


  }

  public logOutUser(data: UserLogged | undefined){

    return this.httpClient.post(`${environment.userApiUrl}/user/logout`, data, this.httpOptions).pipe(tap(res =>{
      let logOutUser = localStorage.removeItem('userInfo');

    if(logOutUser == null){
      this.router.navigate(['']);
    }
    }))
    
  }

  public isAuthenticated(): boolean {
    const authData = localStorage.getItem('userInfo');
    return authData !==null;
  }

  public getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo') as string)
  }

  public testAuth(){
    
    return this.httpClient.get(`${environment.userApiUrl}/test`)
  }

  public signUpUser(data:UserSignUp){
    return this.httpClient.post<UserLogged>(`${environment.userApiUrl}/user/register`, data).pipe(tap((res:UserLogged) =>{ 
      if(res.email){
        const user = JSON.stringify({__id: res._id, email: res.email, name: res.name, lastname: res.lastname, __v: res.__v});
        localStorage.setItem('userInfo', user);
        this.userAuthenticated.next(res);
        this.router.navigate(['']);
      }
      
    }))
  }
}
