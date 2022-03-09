import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FooterService {

  attributionHTML: string = '';
  attributionText: string = '';

  constructor() { }

  public getAttributionHTML(){
    return this.attributionHTML;
  }

  public getAttributionText(){
    return this.attributionText;
  }

  public setAttributionHTML(attributionHTML: string){
    this.attributionHTML = attributionHTML;
  }

  public setAttributionText(attributionText: string){
    this.attributionText = attributionText;
  }

}
