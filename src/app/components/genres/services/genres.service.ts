import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenresInterface} from "../../../interfaces/genres.interface";
import baseUrl, {api} from "../../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<GenresInterface[]> {
    return this.http.get<GenresInterface[]>(baseUrl + api.genres);
  }

}
