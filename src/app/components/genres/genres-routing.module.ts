import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {GenresResolver} from "./services/genres.resolver";
import {GenreDetailsComponent} from "./components/genre-details/genre-details.component";
import {GenresComponent} from "./components/genres/genres.component";

const routes: Routes = [
  {
    path: '', component: GenresComponent,
    resolve: {genresData: GenresResolver},
    children: [
      {path: ':id', component: GenreDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule {

}
