import { CharacterDataWrapper } from './../../models/Character/CharacterDataWrapper.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCharacters(): Observable<CharacterDataWrapper> {
        
    return this.httpClient.get(`${environment.baseApiUrl}characters`,{
      params:{
        'apikey': environment.marvelApiKey
      }}) as Observable<CharacterDataWrapper>
  }
}
