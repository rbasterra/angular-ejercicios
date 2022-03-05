import { CharacterFull } from './../../models/Character/CharacterFull.models';
import { CharacterDataWrapper } from './../../models/Character/CharacterDataWrapper.models';
import { Observable, map, forkJoin, switchMap } from 'rxjs';
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

  // public getCharacterById(id: number): Observable<Character> {
  //   return this.httpClient.get(`${environment.baseApiUrl}characters/${id}`,{
  //     params:{
  //       'apikey': environment.marvelApiKey
  //     }
  //   }).pipe(map((res: any) => res.data.results[0] )) 
  // }

  public getCharacterById(id: number): Observable<CharacterFull> {
    return this.httpClient.get(`${environment.baseApiUrl}characters/${id}`,{
      params:{
        'apikey': environment.marvelApiKey
      }
    }).pipe(map((res: any) => res.data.results[0]), switchMap((res) =>{
      if (!(res.comics.items ===0)){
        return forkJoin(this.getElements(res.comics.items)).pipe(map((comics:any) => {
          return {...res, comics: comics.map((comic:any) => comic.data.results[0])}
        }))
      }else return forkJoin(this.getElements(undefined, res.comics.collectionURI)).pipe(map(() => res))
    }), 
    switchMap((res) => {
      if (!(res.events.items.length === 0)){
       return forkJoin(this.getElements(res.events.items)).pipe(map((events:any) => {
        return {...res, events: events.map( (event:any) => event.data.results[0])}}))
      } else return forkJoin(this.getElements(undefined, res.events.collectionURI)).pipe(map(() => res))
    }),
    switchMap((res:any) => {
      if(!(res.series.items ===0)){
        return forkJoin(this.getElements(res.series.items)).pipe(map((series:any) =>{
        return {...res, series: series.map((serie:any) => serie.data.results[0])}
        }))
      }else return forkJoin(this.getElements(undefined, res.series.collectionURI)).pipe(map(() => res))
    }),
    switchMap(res =>{
      if(!(res.stories.items ===0)){
        return forkJoin(this.getElements(res.stories.items)).pipe(map(stories =>{
          return {...res, stories: stories.map((story:any) => story.data.results[0])}
        }))
      } else return forkJoin(this.getElements(undefined, res.stories.collectionURI)).pipe(map(() => res))
    })
    
    ) 
  }

  

  // public getElements(elementItems:any[], collectionURI:string){
  //   return elementItems.map((item:any) => this.httpClient.get(item.resourceURI,{
  //     params: {
  //       'apikey': environment.marvelApiKey
  //     }
  //   }))
  // }

  public getElements(elementItems:any[] = [], collectionURI?: string){
        
    if(collectionURI){
      return this.httpClient.get(collectionURI,{
        params:{
          'apikey': environment.marvelApiKey
        }
      })
    }
    return elementItems.map((item:any) => this.httpClient.get(item.resourceURI,{
      params: {
        'apikey': environment.marvelApiKey
      }
    }))
    
   
  }
 

  // public getElements(elementItems?: any[]): Observable<any>{
  //   const elements: Observable<any>[] = [];
  //   if(elementItems){
      
  //     for (let i = 0; i < elementItems.length; i++){
  //       elements[i] = this.httpClient.get(elementItems[i].resourceURI, {
  //         params:{
  //           'apikey': environment.marvelApiKey
  //         }
  //       })
  //     }

  //     // const res: any[] = forkJoin(elements);
  //     // console.log(res);
      
      
  //   }
    
  //   return forkJoin(elements);
  // } 

  //   return this.httpClient.get(`${environment.baseApiUrl}characters`,{
  //     params:{
  //       'apikey': environment.marvelApiKey,
        
  //     }})

  // }
}
