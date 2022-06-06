import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {MoviesInterface} from "../../../interfaces/movies.interface";
import baseUrl, {api, key} from "../../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<MoviesInterface[]> {
    return this.http.get<MoviesInterface[]>(baseUrl + api.movies)
  }

  getById(id: number): Observable<MoviesInterface> {
    return this.http.get<MoviesInterface>(baseUrl + api.moviesDetails + '/' + id + key);
  }
}
