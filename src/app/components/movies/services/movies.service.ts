import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {MoviesInterface} from "../../../interfaces/movies.interface";
import {key, urls} from "../../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) {

  }

  getAll():Observable<MoviesInterface[]>{
    return this.httpClient.get<MoviesInterface[]>(urls.movies)
  }

  getById(id:number):Observable<MoviesInterface>{
    return this.httpClient.get<MoviesInterface>(`${urls.movie}/${id}${key}`)
  }
}
