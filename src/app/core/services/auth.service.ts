import { Router } from '@angular/router';
import { User, UserSignUp, UserLogged } from './../../models/User/User.models';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userAuthenticated: ReplaySubject<UserLogged | undefined> = new ReplaySubject<UserLogged | undefined>();

  constructor(private httpClient: HttpClient, private router: Router) { }

  public authenticateUser(data:User){
    
    return this.httpClient.post<UserLogged>(`${environment.userApiUrl}/user/login`, data).pipe(tap((res:UserLogged) =>{
      console.log('authservice');
      
      console.log(res);
      if(res.email){
        const user = JSON.stringify({id: res._id, email: res.email});
        localStorage.setItem('userInfo', user);
        this.userAuthenticated.next(res);
      }
    }))

  }

  public logOutUser(){
    let logOutUser = localStorage.removeItem('userInfo');

    if(logOutUser == null){
      this.router.navigate(['']);
    }
  }

  public isAuthenticated(): boolean {
    const authData = localStorage.getItem('userInfo');
    return authData !==null;
  }

  public testAuth(){
    
    return this.httpClient.get(`${environment.userApiUrl}/test`)
  }

  public signUpUser(data:UserSignUp){
    return this.httpClient.post<UserLogged>(`${environment.userApiUrl}/user/register`, data).pipe(tap((res:UserLogged) =>{ 
      if(res.email){
        const user = JSON.stringify({id: res._id, email: res.email});
        localStorage.setItem('userInfo', user);
        this.userAuthenticated.next(res);
        this.router.navigate(['']);
      }
      
    }))
  }
}
