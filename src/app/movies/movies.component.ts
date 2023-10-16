import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { LoggingService } from '../logging.service';
@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
    title = 'myTitle';
    movies: Movie[] = [];
    selectedMovie: any;

    eklenecekMovie:Movie;

    constructor(private movieService: MovieService, private loggingService: LoggingService) {
        this.eklenecekMovie=new Movie(0,"","","");
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

    add(namee:string,descc:string,imgUrl:string):void{
        this.eklenecekMovie = new Movie(8,namee,descc,imgUrl);
        this.loggingService.add("movie added");
        console.log(this.eklenecekMovie);
        this.movieService.add(this.eklenecekMovie).subscribe(movie=>this.movies.push(movie));
    }
    delete(moviee:Movie):void{
        this.movies = this.movies.filter(m=>m!==moviee);
        this.movieService.delete(moviee).subscribe();
    }
}