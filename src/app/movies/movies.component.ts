import { Component } from '@angular/core';
import { Movies } from '../movie.datasource';
import { Movie } from '../movie';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['./movies.component.css']
})

export class MoviesComponent{
    title='myTitle';
    movies=Movies;


    selectedMovie:any;

    onSelect(movie:Movie): void{
        this.selectedMovie=movie;
    }

}