import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { FilterOnMoviesPipe } from './pipes/filter-on-movies.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MovieCardComponent,
    SpinnerComponent,
    FilterOnMoviesPipe,
    TruncatePipe,
    MovieDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    BrowserModule,
    HttpClientModule
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
