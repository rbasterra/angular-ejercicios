import { Router } from '@angular/router';
import { User, UserLoginRes } from './../../models/User/User.models';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  public authenticateUser(data:User){
    
    return this.httpClient.post<UserLoginRes>(`${environment.userApiUrl}/user/login`, data).pipe(tap((res:UserLoginRes) =>{
      console.log('authservice');
      
      console.log(res);
      if(res.email){
        const user = JSON.stringify({id: res._id, email: res.email});
        localStorage.setItem('userInfo', user);
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
}
