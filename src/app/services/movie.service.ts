import { Injectable, Inject } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MOVIES_API_BASE_URL, MOVIES_API_KEY } from '../injection.tokens';
import { MovieCollectionDto } from '../models/movie-collection-dto';
import { MovieDetails } from '../models/movie-details';

@Injectable()
export class MovieService {

  constructor(
    private http: Http,
    @Inject(MOVIES_API_BASE_URL) private baseUrl,
    @Inject(MOVIES_API_KEY) private apiKey
  ) { }

  public getMovies(category: string, page: number = 1): Observable<MovieCollectionDto> {
    const url = `${this.baseUrl}/${category}`;
    const params = new URLSearchParams();
    params.set('api_key', this.apiKey);
    params.set('page', page.toString());

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getMovieDetails(movieId: string): Observable<MovieDetails> {
    const url = `${this.baseUrl}/${movieId}`;
    const params = new URLSearchParams();
    params.set('api_key', this.apiKey);
    params.set('append_to_response', 'trailers,reviews');

    const headers = new Headers();
    const options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    return response.json() || { };
  }

  private handleError (error: Response | any) {
    let errorMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

}
