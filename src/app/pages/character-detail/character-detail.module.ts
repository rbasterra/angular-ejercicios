import { CoreModule } from './../../core/core.module';


import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';


@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule,
    SharedModule,
    FormsModule,
    CoreModule
  ]
})
export class CharacterDetailModule { }
