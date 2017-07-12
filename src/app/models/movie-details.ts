import { Genre } from './genre';
import { Country } from './country';
import { Company } from './company';
import { Language } from './language';
import { TrailerCollectionDto } from './trailer-collection-dto';
import { ReviewCollectionDto } from './review-collection-dto';

export class MovieDetails {
    id: number;
    title: string;
    tagline: string;
    status: string;
    homepage: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    budget: number;
    revenue: number;
    runtime: number;
    genres: Genre[];
    production_companies: Company[];
    production_countries: Country[];
    spoken_languages: Language[];
    trailers: TrailerCollectionDto;
    reviews: ReviewCollectionDto;
}
