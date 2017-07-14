import { Component, OnInit, Input, Inject } from '@angular/core';
import { Movie } from '../models/movie';
import { POSTER_BASE_URL } from '../injection.tokens';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  posterUrl: string;

  constructor(
    @Inject(POSTER_BASE_URL) private posterBaseUrl
  ) { }

  ngOnInit() {
    this.posterUrl =
        this.movie.poster_path
        ? this.posterBaseUrl + this.movie.poster_path
        : 'http://via.placeholder.com/185x277';
  }

}
