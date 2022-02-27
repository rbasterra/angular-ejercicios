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

  

  constructor(
    private marvelService: MarvelService
  ) { 
    
      this.marvelService.getCharacters(this.offset).subscribe( {next: result => {
        this.characters = result.data.results as Character[]
        this.totalCharacters = result.data.total as number;
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
    this.offset = (event-1) * this.characters.length
    this.p = event;

    this.marvelService.getCharacters(this.offset).subscribe( {next: result => {
      this.characters = result.data.results as Character[]
      
      
    },
      error: err => console.log(err)      
      })
  }

  

}
