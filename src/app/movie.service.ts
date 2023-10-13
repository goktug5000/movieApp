import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl='api/movies';

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient

  ) { }


  getMovies(): Observable<Movie[]> {
    this.loggingService.add('movie.service.ts: listing movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }


  getMovie(id: number): Observable<Movie | undefined> {
    this.loggingService.add('movie.service.ts: detailed movie id:' + id);
    return of(Movies.find(dnm => dnm.id == id));
  }

  update(moviee:Movie):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.put(this.apiMoviesUrl,moviee,httpOptions);
  }
}
