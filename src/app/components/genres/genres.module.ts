import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {GenresComponent} from './components/genres/genres.component';
import {GenreComponent} from './components/genre/genre.component';
import {GenreDetailsComponent} from './components/genre-details/genre-details.component';
import {GenresService} from "./services/genres.service";
import {GenresResolver} from "./services/genres.resolver";
import {GenresRoutingModule} from './genres-routing.module';


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent,
    GenreDetailsComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule,
    HttpClientModule
  ],
  providers: [
    GenresService,
    GenresResolver
  ]
})
export class GenresModule {
}
