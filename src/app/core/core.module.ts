import { SecureHttpInterceptor } from './interceptors/secure-http.interceptor';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { FooterService } from './services/footer.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarvelService } from './services/marvel.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelFilterPipe } from './pipes/marvel-filter.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    MarvelFilterPipe,
    HeaderComponent,
    FooterComponent
  ],
  providers:[
    MarvelService,
    FooterService,
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: SecureHttpInterceptor,
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports:[
    MarvelFilterPipe,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
