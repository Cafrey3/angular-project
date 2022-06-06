import {Component, Input, OnInit} from '@angular/core';
import {GenresInterface} from "../../../../interfaces/genres.interface";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: GenresInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
