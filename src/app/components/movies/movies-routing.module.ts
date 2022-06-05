import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "../header/header.component";
import {MoviesComponent} from "./components/movies/movies.component";

const routes: Routes = [
  {path:'',component:MoviesComponent,
  resolve:{}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    HeaderComponent
  ],
  exports: [RouterModule, HeaderComponent]
})
export class MoviesRoutingModule { }
