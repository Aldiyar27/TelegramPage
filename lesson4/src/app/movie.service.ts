import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieInfo(title: string): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?t=${title}&apikey=d2f43931`);
  }
}
