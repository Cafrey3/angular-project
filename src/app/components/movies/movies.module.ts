import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MoviesService} from "./services/movies.service";
import {MoviesResolver} from "./services/movies.resolver";
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesDetailsResolver} from "./services/movies-details.resolver";


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MoviesResolver,
    MoviesService,
    MoviesDetailsResolver
  ]
})
export class MoviesModule {
}
