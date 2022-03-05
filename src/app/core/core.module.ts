import { FooterService } from './services/footer.service';
import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './services/marvel.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelFilterPipe } from './pipes/marvel-filter.pipe';



@NgModule({
  declarations: [
    MarvelFilterPipe
  ],
  providers:[
    MarvelService,
    FooterService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    MarvelFilterPipe
  ]
})
export class CoreModule { }
