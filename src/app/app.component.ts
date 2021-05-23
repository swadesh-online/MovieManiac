import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movie } from './models/movie';
declare let html2canvas: any;
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
  showPoster: boolean;
  movieTitle: string;
  movieData!: movie;
  errorMessage: string;
  capturedImage: any;
  constructor(private http: HttpClient) {
    this.showTable = false;
    this.showPoster = false;
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
            this.showPoster = true;
            this.movieData = data;
          }
          else {
            this.errorMessage = "I am sorry . I couldn't find your movie. I just hope you give me one more chance."
          }
        },
        error: _error => {
          this.errorMessage = "It's not you. It's us. Hoping things will get better after sometime."
        }
      })
    } else {
      this.errorMessage = "I can see you are randomly clicking on search..add something in the input field for me to search. Okay bye."
    }

  }
  reset() {
    this.showPoster = false;
    this.errorMessage = ''
    this.showTable = false;
    this.movieTitle = '';
  }

  pngDownload() {
    this.errorMessage = '';
    if (this.movieData) {
      html2canvas(document.querySelector("#res")).then((_canvas: any) => {
        this.capturedImage = _canvas.toDataURL();
        var link = document.createElement('a');
        link.href = _canvas.toDataURL("image/jpeg", "1");;
        link.download = this.movieData.Title + ".png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      )
    } else {
      this.errorMessage = "We love to share. But first let's try searching. Then we can definitely share it. "
    }
  }

}
