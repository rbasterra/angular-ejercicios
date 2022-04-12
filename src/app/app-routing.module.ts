import { AuthUserGuard } from './core/guards/auth-user.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    loadChildren: () => import('src/app/pages/character-list/character-list.module').then(m => m.CharacterListModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'character/:id',
    loadChildren: () => import('src/app/pages/character-detail/character-detail.module').then(m => m.CharacterDetailModule),
    canActivate: [AuthUserGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('src/app/pages/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'account',
    loadChildren: () => import('src/app/pages/user-account/user-account.module').then(m => m.UserAccountModule),
    canActivate: [AuthUserGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthUserGuard]
})
export class AppRoutingModule { }
