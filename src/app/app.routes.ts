import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
]
