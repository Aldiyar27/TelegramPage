import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent {
  movieInfo: any;
  title: string = '';

  constructor(private movieService: MovieService) { }

  searchMovie() {
    this.movieService.getMovieInfo(this.title).subscribe((data) => {
      this.movieInfo = data;
    });
  }
}