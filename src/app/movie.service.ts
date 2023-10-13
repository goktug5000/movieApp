import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService: LoggingService) {


  }


  getMovies(): Observable<Movie[]> {
    this.loggingService.add('movie.service.ts: listing movies');
    return of(Movies);
  }


  getMovie(id: number): Observable<Movie | undefined> {
    this.loggingService.add('movie.service.ts: detailed movie id:' + id );
    return of(Movies.find(dnm => dnm.id == id));
  }
}
