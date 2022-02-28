import { Element } from './../../models/Element/element.models';
import { ElementItems } from './../../models/Element/elementItems.models';
import { Character } from './../../models/Character/Character.models';
import { CharacterDataWrapper } from './../../models/Character/CharacterDataWrapper.models';
import { Observable, map, forkJoin } from 'rxjs';
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

  public getCharacters(offset?:number): Observable<CharacterDataWrapper> {
    
    if (offset){
    return this.httpClient.get(`${environment.baseApiUrl}characters`,{
      params:{
        'apikey': environment.marvelApiKey,
        'offset': offset
      }}) as Observable<CharacterDataWrapper>
    } else{
        return this.httpClient.get(`${environment.baseApiUrl}characters`,{
          params:{
            'apikey': environment.marvelApiKey,
            
          }}) as Observable<CharacterDataWrapper>
      }
  }

  public getCharacterById(id: number): Observable<Character> {
    return this.httpClient.get(`${environment.baseApiUrl}characters/${id}`,{
      params:{
        'apikey': environment.marvelApiKey
      }
    }).pipe(map((res: any) => res.data.results[0] )) 
  }

  public getElements(elementItems?: any[]): Observable<any>{

    if(elementItems){
      const elements: Observable<any>[] = [];
      for (let i = 0; i < elementItems.length; i++){
        elements[i] = this.httpClient.get(elementItems[i].resourceURI, {
          params:{
            'apikey': environment.marvelApiKey
          }
        })
      }

      // const res: any[] = forkJoin(elements);
      // console.log(res);
      
      return forkJoin(elements);
    } 

    return this.httpClient.get(`${environment.baseApiUrl}characters`,{
      params:{
        'apikey': environment.marvelApiKey,
        
      }})

  }
}
