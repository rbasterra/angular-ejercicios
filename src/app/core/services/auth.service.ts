import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public authenticateUser(data:any){
    return this.httpClient.post(`${environment.userApiUrl}/user/login`, data)
  }
}
