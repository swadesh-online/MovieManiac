import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly sourceurl = "https://www.omdbapi.com/?";
  apikey: string;
  query: string;
  showTable: boolean;
  movieTitle: string;
  movieData!: movie;
  errorMessage: string;
  constructor(private http: HttpClient) {
    this.showTable = false;
    this.movieTitle = '';
    this.query = this.sourceurl;
    this.apikey = "22c16c92";
    this.query = this.query + "apikey=" + this.apikey;
    this.errorMessage = '';
  }

  ngOnInit() {

  }
  searchData(q: any) {
    if (q != '') {
      this.showTable = false;
      this.errorMessage = '';
      var queryData = this.query + "&t=" + q.replace(' ', '+');
      this.http.get<movie>(queryData).subscribe({
        next: data => {
          if (data.Response === "True") {
            this.showTable = true;
            this.movieData = data;
          }
          else {
            this.errorMessage = "I am sorry . I couldn't find your movie. I just hope you give me one more chance."
          }
        },
        error: error => {
          this.errorMessage = "It's not you. It's us. Hoping things will get better after sometime."
        }
      })
    } else {
      this.errorMessage = "I can see you are randomly clicking on search..add something in the input field for me to search. Okay bye."
    }

  }
  reset() {
    this.errorMessage = ''
    this.showTable = false;
    this.movieTitle = '';
  }
}
