import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {GenresInterface} from "../../../interfaces/genres.interface";
import {GenresService} from "./genres.service";

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<GenresInterface[]> {
  constructor(private genresService: GenresService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GenresInterface[]> | Promise<GenresInterface[]> | GenresInterface[] {
    return this.genresService.getAll();

  }

}

