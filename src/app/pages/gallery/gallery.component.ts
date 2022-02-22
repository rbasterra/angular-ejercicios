import { Hero } from './../../models/avengers.models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { avengers } from './avengers-list.config';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  public avengersArray: Hero[] = avengers;
  public numSelected: number = 0;
  public isHidden: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    
    for(let avenger of this.avengersArray){
      avenger.isActive = false;
    }
    
  }

  public hideDiv(){
    this.isHidden = !this.isHidden;
  }

  public select(avenger:Hero){
    avenger.isActive = !avenger.isActive;
    // avenger.isActive ? this.numSelected++ : this.numSelected--
    // this.numSelected === 0 ? this.isHidden = !this.isHidden : undefined;
    // console.log(this.numSelected=== 0);

    if (avenger.isActive && this.numSelected === 0){
      this.numSelected++;
      this.isHidden = !this.isHidden;
    } else if (!avenger.isActive && this.numSelected===1){
      this.numSelected--;
      this.isHidden = !this.isHidden;
    } else if (avenger.isActive) this.numSelected++
    else this.numSelected--
    
    console.log(this.numSelected);
    
  }


}
