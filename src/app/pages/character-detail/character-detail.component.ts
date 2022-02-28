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

  public elements: any[] = [];

  public selected: string = 'comics';

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
            
            this.marvelService.getElements(this.character.comics?.items).subscribe(res => res.map((ele: any) => this.elements.push(ele.data.results[0])))
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
        this.marvelService.getElements(this.character?.comics?.items).subscribe(res => res.map((ele:any) => this.elements.push(ele.data.results[0])));
        
        break
      
      case 'series':
        this.marvelService.getElements(this.character?.series?.items).subscribe(res => res.map((ele:any) => this.elements.push(ele.data.results[0])));
        break
      
      case 'events':
        this.marvelService.getElements(this.character?.events?.items).subscribe(res => res.map((ele:any) => this.elements.push(ele.data.results[0])));
        break

      case 'stories':
        this.marvelService.getElements(this.character?.stories?.items).subscribe(res => res.map((ele:any) => this.elements.push(ele.data.results[0])));
        break
    }
    
  }

}
