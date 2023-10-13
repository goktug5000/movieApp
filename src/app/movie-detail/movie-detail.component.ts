import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {


  @Input() movie: any

  ngOnInit(): void {
    this.getMovie();
  }


  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {

  }


  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe(dnm=>this.movie=dnm);
  }
  save(){
    
  }
}
