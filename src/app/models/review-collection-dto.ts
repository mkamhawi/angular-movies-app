import { Review } from './review';

export class ReviewCollectionDto {
    page: number;
    total_pages: number;
    total_results: number;
    results: Review[];
}
