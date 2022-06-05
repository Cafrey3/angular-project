import {environment} from '../../environments/environment';

const {API} = environment;

export const key = '6d318e199717546d317f5943b08508c2'


export const urls = {
  movies: `${API}/discover/movie${key}`,
  movie:`${API}/movie`,
  genres:`${API}/genre/movie/list${key}`
}
