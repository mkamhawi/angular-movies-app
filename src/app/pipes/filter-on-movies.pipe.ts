import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'filterOnMovies'
})
export class FilterOnMoviesPipe implements PipeTransform {
  transform(movies: Array<Movie>, movieTitle: string): Array<Movie> {
    if (!movieTitle) { return movies; }
    return movies.filter(movie => movie.title.toLowerCase().lastIndexOf(movieTitle.toLowerCase()) > -1);
  }
}
