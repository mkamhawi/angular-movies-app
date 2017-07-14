import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  MoviesApiKey,
  MoviesApiBaseUrl,
  PosterBaseUrl,
  YouTubeBaseUrl
} from './app.constants';
import {
  MOVIES_API_KEY,
  MOVIES_API_BASE_URL,
  POSTER_BASE_URL,
  YOUTUBE_BASE_URL
} from './injection.tokens'
import { MovieService } from './services/movie.service';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MovieCardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [
    {provide: MOVIES_API_KEY, useValue: MoviesApiKey},
    {provide: MOVIES_API_BASE_URL, useValue: MoviesApiBaseUrl},
    {provide: POSTER_BASE_URL, useValue: PosterBaseUrl},
    {provide: YOUTUBE_BASE_URL, useValue: YouTubeBaseUrl},
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
