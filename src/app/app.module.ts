import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from './components/header/menu/menu.component';
import {MoviesRoutingModule} from "./components/movies/movies-routing.module";
import {GenresRoutingModule} from "./components/genres/genres-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MoviesRoutingModule,
    GenresRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
