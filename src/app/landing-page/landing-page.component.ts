import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  availableCategories = [
    'now_playing',
    'upcoming',
    'popular',
    'top_rated'
  ];
  selectedCategory: string;
  pageNumber: number;
  totalPages: number;
  movies: Movie[];
  errorMsg = '';

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.selectedCategory = this.availableCategories[0];
    this.resetPageStatus();
  }

  private resetPageStatus(): void {
    this.pageNumber = 0;
    this.movies = [];
    this.getMovies();
  }

  private getMovies(): void {
    this.pageNumber++;
    this.errorMsg = '';
    this.movieService.getMovies(this.selectedCategory, this.pageNumber)
          .subscribe(
            movieCollection => {
              console.log(movieCollection);
              this.totalPages = movieCollection.total_pages;
              this.movies = this.movies.concat(movieCollection.results);
            },
            error => {
              console.log(error);
              this.errorMsg = error;
              this.pageNumber--;
            }
          );
  }

  private changeSelectedCategory(category: string): void {
    this.selectedCategory = category;
    this.resetPageStatus();
  }

  private getCategoryName(categoryKey: string): string {
    return categoryKey.split('_').join(' ');
  }

}
