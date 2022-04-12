import { UserAccountModule } from './pages/user-account/user-account.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CharacterListModule } from './pages/character-list/character-list.module';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { ContactModule } from './pages/contact/contact.module';
import { GalleryModule } from './pages/gallery/gallery.module';
import { CoreModule } from './core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent
    
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
    BrowserAnimationsModule,
    NgbModule,
    NgxSpinnerModule,
    UserAccountModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
