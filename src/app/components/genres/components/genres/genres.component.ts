import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {GenresInterface} from "../../../../interfaces/genres.interface";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: GenresInterface[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genresData: {genres}}) => this.genres = genres);
  }

}
