import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: MOVIES_API_KEY, useValue: MoviesApiKey},
    {provide: MOVIES_API_BASE_URL, useValue: MoviesApiBaseUrl},
    {provide: POSTER_BASE_URL, useValue: PosterBaseUrl},
    {provide: YOUTUBE_BASE_URL, useValue: YouTubeBaseUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
