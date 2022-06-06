import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {MoviesInterface} from "../../../../interfaces/movies.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: MoviesInterface[];

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({moviesData: {results}}) => this.movies = results)
  }

}
