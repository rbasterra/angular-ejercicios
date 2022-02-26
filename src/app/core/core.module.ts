import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './services/marvel.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  providers:[
    MarvelService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
