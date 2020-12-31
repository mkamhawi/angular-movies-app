import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { MOVIES_API_BASE_URL, MOVIES_API_KEY } from '../injection.tokens';
import { MovieCollectionDto } from '../models/movie-collection-dto';
import { MovieDetails } from '../models/movie-details';

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient,
    @Inject(MOVIES_API_BASE_URL) private baseUrl,
    @Inject(MOVIES_API_KEY) private apiKey
  ) { }

  public getMovies(category: string, page: number = 1): Observable<MovieCollectionDto> {
    const url = `${this.baseUrl}/${category}?api_key=${this.apiKey}&page=${page.toString()}`;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = {
      headers: headers
    };

    return this.http.get<MovieCollectionDto>(url, options).pipe(
      catchError(this.handleError));
  }

  public getMovieDetails(movieId: string): Observable<MovieDetails> {
    const url = `${this.baseUrl}/${movieId}?api_key=${this.apiKey}&append_to_response=trailers,reviews`;

    const headers = new HttpHeaders();
    const options = {
      headers: headers
    };

    return this.http.get<MovieDetails>(url, options).pipe(
      catchError(this.handleError));
  }

  private handleError (error: any) {
    let errorMsg: string;
    if (error instanceof Response) {
      const err = JSON.stringify(error);
      errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    console.error(errorMsg);
    return observableThrowError(errorMsg);
  }

}
