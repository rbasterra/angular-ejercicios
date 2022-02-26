import { environment } from '../../../environments/environment';
import { Character } from './../../models/Character/Character.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() public character?: Character;

  public characterImg?: string;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.characterImg = this.character?.thumbnail?.path + '/' + environment.imgSize + '.' + this.character?.thumbnail?.extension;
  }

}
