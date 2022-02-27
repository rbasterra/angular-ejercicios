import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CharacterListModule } from './pages/character-list/character-list.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './pages/header/header.component';
import { HomeModule } from './pages/home/home.module';
import { ContactModule } from './pages/contact/contact.module';
import { GalleryModule } from './pages/gallery/gallery.module';
import { CoreModule } from './core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
    HomeModule,
    ContactModule,
    CoreModule,
    CharacterListModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
