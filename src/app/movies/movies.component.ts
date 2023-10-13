import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
    title = 'myTitle';
    movies: Movie[] = [];
    selectedMovie: any;


    constructor(private movieService: MovieService) {


    }

    ngOnInit(): void {
        this.setMovies();

    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    setMovies(): void {
        this.movieService.getMovies().subscribe(dnm => { this.movies = dnm });
    }
}