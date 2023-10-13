import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  movies: Movie[] = [];
  moviesLength:number=0;

  constructor(private movieService: MovieService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies();
  }
  getMovies(): void {

    this.movieService.getMovies().subscribe(dnm => {
      this.movies = dnm.slice(0,4)//ilk 4 veriyi getiriyor
      this.moviesLength=dnm.length;
    
    });
    
  }
}
