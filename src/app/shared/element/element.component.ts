import { ElementCard } from './../../models/element.interface';
import { Component, OnInit, Input } from '@angular/core';
import { style, trigger, animate, transition, state } from '@angular/animations';
import { Url } from './../../models/Url.models';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
  animations: [
    trigger('elementFlip',[
      state('default', style({transform: 'none'})),
      state('flipped', style({transform: 'rotateY(180deg)'})),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('400ms')])
    ])
  ]
})
export class ElementComponent implements OnInit {

  @Input() public element?: any;

  public elementImg?: string;
  public elementUrl?: Url;
  data: ElementCard = {
    state: 'default'
  }

  constructor() { }

  ngOnInit(): void {
    this.elementImg = this.element?.thumbnail?.path + '/' + environment.imgSize + '.' + this.element?.thumbnail?.extension;
    this.elementUrl = this.element?.urls?.find((url:any) => url.type==='detail');
    
    
  }

  public elementClicked(){
    if(this.data.state ==='default'){
      this.data.state = 'flipped';
    }else {
      this.data.state = 'default';
    }
  }

}
