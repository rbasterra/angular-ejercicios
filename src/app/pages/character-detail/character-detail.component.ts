import { Story } from './../../models/Story/Story.models';
import { Events } from './../../models/Event/Event.models';
import { Series } from './../../models/Series/Serie.models';
import { Comic } from './../../models/Comic/Comic.models';
import { CharacterFull } from './../../models/Character/CharacterFull.models';
import { Element } from './../../models/Element/element.models';
import { ActivatedRoute } from '@angular/router';


import { MarvelService } from './../../core/services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public character?: CharacterFull;
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
       
        this.marvelService.getCharacterById(characterId).subscribe({next: (res: any) => {
            console.log('en getCharacterById');
          
            console.log(res);
          
            this.characterImg = `${res.thumbnail?.path}.${res.thumbnail?.extension}`        
            this.character = res;
             
           
            this.character?.comics?.map((comic: Comic) =>this.elements.push({
              title: comic.title,
              description: comic.description,
              thumbnail: comic.thumbnail,
              urls: comic.urls
            }))            
          },
        error:err => console.log(err)
        })
      })    
    }

  ngOnInit(): void {

  }

  public navClicked(event: Event){
    
    this.selected = (event.target as HTMLElement).innerText;
    this.elements = [];

    switch(this.selected){
      case 'comics':
        if (this.character?.comics && this.character.comics.length > 0){
          this.character?.comics?.map((comic: Comic) =>this.elements.push({
            title: comic.title,
            description: comic.description,
            thumbnail: comic.thumbnail,
            urls: comic.urls
          }))
        }        
        break
      
      case 'series':
        if (this.character?.series && this.character.series.length > 0){
          this.character?.series?.map((serie:Series) => this.elements.push({
            title: serie.title,
            description: serie.description,
            thumbnail: serie.thumbnail,
            urls: serie.urls
          }))
        }
        break
      
      case 'events':
        
        if (this.character?.events && this.character.events.length > 0){
          this.character?.events?.map((event:Events) => this.elements.push({
            title: event.title,
            description: event.description,
            thumbnail: event.thumbnail,
            urls: event.urls
          }))
        }
        break

      case 'stories':

        if (this.character?.stories && this.character.stories.length > 0){
          this.character.stories.map((story:Story) => this.elements.push({
            title: story.title,
            description: story.description,
            thumbnail: story.thumbnail,
          }))          
        }
        break
    }
    
  }

}
