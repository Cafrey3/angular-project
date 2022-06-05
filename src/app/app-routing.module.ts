import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MenuComponent} from "./components/header/menu/menu.component";


const routes : Routes = [
  {
    path:'', component: MenuComponent, children:[
      {path: '', redirectTo: 'movies', pathMatch:'full'},
      {path:'movies', loadChildren:()=>import('./components/movies/movies.module').then(value => value.MoviesModule)},
      {path:'genres', loadChildren:()=>import('./components/genres/genres.module').then(value => value.GenresModule)}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
