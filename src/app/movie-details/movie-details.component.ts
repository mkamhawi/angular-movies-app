import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router/esm2015';
import { MovieService } from '../services/movie.service';
import { MovieDetails } from '../models/movie-details';
import { POSTER_BASE_URL } from '../injection.tokens';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  private movieId: string;
  public errorMsg: string;
  public movie: MovieDetails;
  private posterUrl: string;
  public isLoading = false;
  private expandedReviewId: string;
  private descriptionLimit = 300;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    @Inject(POSTER_BASE_URL) private posterBaseUrl
  ) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    this.getMovieDetails();
  }

  private getMovieDetails(): void {
    this.isLoading = true;
    this.movieService.getMovieDetails(this.movieId)
      .subscribe(
        movieDetails => {
          console.log(movieDetails);
          this.movie = movieDetails;
          this.posterUrl =
            this.movie.poster_path
            ? this.posterBaseUrl + this.movie.poster_path
            : 'http://via.placeholder.com/185x277';
          this.isLoading = false;
        },
        errorMsg => {
          console.log(errorMsg);
          this.errorMsg = errorMsg;
          this.isLoading = false;
        }
      );
  }

  expandDescription(reviewId) {
    this.expandedReviewId = reviewId;
  }

  contractDescription() {
    this.expandedReviewId = null;
  }

}
