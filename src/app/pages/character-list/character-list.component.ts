import { Character } from './../../models/Character/Character.models';
import { MarvelService } from './../../core/services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters?: Character[] = [];

  constructor(
    private marvelService: MarvelService
  ) { 
    
      this.marvelService.getCharacters().subscribe( {next: result => this.characters = result.data.results,
        error: err => console.log(err)      
        })

    
    
  }

  ngOnInit(): void {
    
  }

}
