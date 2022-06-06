import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MoviesComponent} from "./components/movies/movies.component";
import {MoviesResolver} from "./services/movies.resolver";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MoviesDetailsResolver} from "./services/movies-details.resolver";

const routes: Routes = [
  {
    path: '', component: MoviesComponent,
    resolve: {moviesData: MoviesResolver},
    children: [
      {
        path: ':id', component: MovieDetailsComponent,
        resolve: {movieData: MoviesDetailsResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
