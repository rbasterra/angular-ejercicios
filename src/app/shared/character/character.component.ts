import { Url } from './../../models/Url.models';

import { environment } from '../../../environments/environment';
import { Character, CharacterCard } from './../../models/Character/Character.models';
import { Component, OnInit, Input } from '@angular/core';
import { style, trigger, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  animations: [
    trigger('elementFlip',[
      state('default', style({transform: 'none'})),
      state('flipped', style({transform: 'rotateY(180deg)'})),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('400ms')])
    ])
  ]
})
export class CharacterComponent implements OnInit {

  @Input() public character?: Character;

  public characterImg?: string;
  public characterUrl?: Url;
  data: CharacterCard = {
    state: 'default'
  }

  constructor() { 
    
  }

  ngOnInit(): void {
    this.characterImg = this.character?.thumbnail?.path + '/' + environment.imgSize + '.' + this.character?.thumbnail?.extension;
    this.characterUrl = this.character?.urls?.find(url => url.type==='detail');
    
    
  }

  public elementClicked(){
    if(this.data.state ==='default'){
      this.data.state = 'flipped';
    }else {
      this.data.state = 'default';
    }
  }

}
