import { FooterService } from './../../core/services/footer.service';
import { Element } from './../../models/Element/element.models';

import { Character } from './../../models/Character/Character.models';
import { MarvelService } from './../../core/services/marvel.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters: Character[] = [];
  public p: number = 1;
  public totalCharacters: number = 0;
  private offset: number = 0;
  public attributionText: string = '';
  public elements: Element[]=[];
  

  constructor(
    private marvelService: MarvelService,
    private footerService: FooterService
  ) { 
    
      this.marvelService.getCharacters(this.offset).subscribe( {next: result => {
        this.attributionText = result.attributionText;
        this.footerService.setAttributionText(result.attributionText);
        this.footerService.setAttributionHTML(result.attributionHTML);
        console.log('attributionText en character-list: ' + this.footerService.getAttributionText());
        
        this.totalCharacters = result.data.total as number;

        result.data.results?.map((character: Character) => this.elements.push({
          id: character.id,
          title: character.name,
          description: character.description,
          thumbnail: character.thumbnail,
          urls: character.urls
        } as Element));
        
        
      },
        error: err => console.log(err)      
        })
    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void{
    this.p = 1;
  }

  public pageChangeEvent(event: number){
    this.offset = (event-1) * this.elements.length
    this.p = event;
    this.elements = [];

    this.marvelService.getCharacters(this.offset).subscribe( {next: result => {
      this.attributionText = result.attributionText;
      this.footerService.setAttributionText(result.attributionText);
      this.footerService.setAttributionHTML(result.attributionHTML);

      result.data.results?.map((character: Character) => this.elements.push({
        id: character.id,
        title: character.name,
        description: character.description,
        thumbnail: character.thumbnail,
        urls: character.urls
      } as Element));
      
      
    },
      error: err => console.log(err)      
      })
  }

  

}
