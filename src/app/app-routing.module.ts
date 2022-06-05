import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

const routes : Routes = [
  {
    path:'', component: MainLayoutComponent, children:[
      // {path: '', redirectTo: 'movies', pathMatch:'full'},
      // {path:'movies', loadChildren:()=>import('./modules/movies/movies.module').then(value => value.MoviesModule)},
      // {path:'genres', loadChildren:()=>import('./modules/genres/genres.module').then(value => value.GenresModule)}
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
