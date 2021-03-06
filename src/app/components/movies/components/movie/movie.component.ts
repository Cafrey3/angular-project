import {Component, Input, OnInit} from '@angular/core';

import {MoviesInterface} from "../../../../interfaces/movies.interface";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: MoviesInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
