import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {MoviesInterface} from "../../../interfaces/movies.interface";
import {MoviesService} from "./movies.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesDetailsResolver implements Resolve<MoviesInterface> {

  constructor(private moviesService: MoviesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MoviesInterface> | Promise<MoviesInterface> | MoviesInterface {
    const {id} = route.params
    return this.moviesService.getById(id);
  }

}
