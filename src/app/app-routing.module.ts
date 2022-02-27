import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo:'Home',

    pathMatch: 'full',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'home',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'gallery',
    loadChildren: () => import('src/app/pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('src/app/pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('src/app/pages/character-list/character-list.module').then(m => m.CharacterListModule)
  },
  {
    path: 'character/:id',
    loadChildren: () => import('src/app/pages/character-detail/character-detail.module').then(m => m.CharacterDetailModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
