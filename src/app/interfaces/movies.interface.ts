import {MoviesGenresInterface} from "./movies-genres.interface";

export interface MoviesInterface {
  id: number;
  original_title: string;
  overview: string;
  genres: MoviesGenresInterface;
  // genre_ids: [id: number];
  release_date: string;
  vote_average: string;
  poster_path: null;
  vote_count: number;
  runtime: number;
  revenue: number;
  homepage: string;
  budget: number;
  adult: boolean;
  status: string;

}
