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

}
