import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { ElementComponent } from './element/element.component';




@NgModule({
  declarations: [
    CharacterComponent,
    ElementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CharacterComponent,
    ElementComponent
  ]
})
export class SharedModule { }
