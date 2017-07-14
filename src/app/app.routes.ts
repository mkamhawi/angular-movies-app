import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: ':id',
    component: MovieDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
]
