import { NgxSpinnerModule } from 'ngx-spinner';

import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    SharedModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class CharacterListModule { }
