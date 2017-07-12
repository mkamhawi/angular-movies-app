import { Movie } from './movie';

export class MovieCollectionDto {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}
