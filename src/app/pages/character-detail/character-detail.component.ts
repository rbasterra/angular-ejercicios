import { Element } from './../../models/Element/element.models';
import { ActivatedRoute } from '@angular/router';

import { Character } from './../../models/Character/Character.models';
import { MarvelService } from './../../core/services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public character?: Character;
  public characterImg?: string;

  public elements: Element[] = [];

  public selected: string = 'comics';
  public filter: string ='';
  public attributionText: string = '';

  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute
  ) {
      this.route.params.subscribe(params => {
        const characterId = params['id'];
        this.marvelService.getCharacterById(characterId).subscribe({next: (res: Character) => {
          
            this.characterImg = `${res.thumbnail?.path}.${res.thumbnail?.extension}`        
            this.character = res
            console.log(res);
            
            // this.marvelService.getElements(this.character.comics?.items).subscribe(res => res.map((ele: any) => this.elements.push(ele.data.results[0])))
            // this.marvelService.getElements(this.character.comics?.items).subscribe(res => res.map((ele: Element) => this.elements.push(ele)))
            this.marvelService.getElements(this.character.comics?.items).subscribe(res => {
              this.attributionText = res[0].attributionText;  
              console.log(this.attributionText);
              console.log(res);
              
                          

              res.map((ele: any) => {
                const returnEle: Element = {
                title: ele.data.results[0].title,
                description: ele.data.results[0].description,
                thumbnail: ele.data.results[0].thumbnail,
                urls: ele.data.results[0].urls
              }

              this.elements.push(returnEle);

            })})
            
          }})
      })    
    }

  ngOnInit(): void {

  }

  public navClicked(event: Event){
    
    this.selected = (event.target as HTMLElement).innerText;
    this.elements = [];

    switch(this.selected){
      case 'comics':
        // this.marvelService.getElements(this.character?.comics?.items).subscribe(res => res.map((ele:any) => this.elements.push(ele.data.results[0])));
        this.marvelService.getElements(this.character?.comics?.items).subscribe(res => res.map((ele: any) =>  {
          const returnEle: Element = {
            title: ele.data.results[0].title,
            description: ele.data.results[0].description,
            thumbnail: ele.data.results[0].thumbnail,
            urls: ele.data.results[0].urls
          }

          this.elements.push(returnEle);

        }))
        
        break
      
      case 'series':
        // this.marvelService.getElements(this.character?.series?.items).subscribe(res => res.map((ele:any) => this.elements.push(ele.data.results[0])));
        this.marvelService.getElements(this.character?.series?.items).subscribe(res => res.map((ele: any) =>  {
          const returnEle: Element = {
            title: ele.data.results[0].title,
            description: ele.data.results[0].description,
            thumbnail: ele.data.results[0].thumbnail,
            urls: ele.data.results[0].urls
          }

          this.elements.push(returnEle);

        }));

        break
      
      case 'events':
        // this.marvelService.getElements(this.character?.events?.items).subscribe(res => res.map((ele:any) => this.elements.push(ele.data.results[0])));
        this.marvelService.getElements(this.character?.events?.items).subscribe(res => res.map((ele: any) =>  {
          const returnEle: Element = {
            title: ele.data.results[0].title,
            description: ele.data.results[0].description,
            thumbnail: ele.data.results[0].thumbnail,
            urls: ele.data.results[0].urls
          }

          this.elements.push(returnEle);

        }));

        break

      case 'stories':
        // this.marvelService.getElements(this.character?.stories?.items).subscribe(res => res.map((ele:any) => this.elements.push(ele.data.results[0])));
        this.marvelService.getElements(this.character?.stories?.items).subscribe(res => res.map((ele: any) =>  {
          const returnEle: Element = {
            title: ele.data.results[0].title,
            description: ele.data.results[0].description,
            thumbnail: ele.data.results[0].thumbnail,
            urls: ele.data.results[0].urls
          }

          this.elements.push(returnEle);

        }));

        break
    }
    
  }

}
