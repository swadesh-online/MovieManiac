export class movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Array<{ Source: string, Value: string }>;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;

    constructor(mov: movie) {
        this.Title = mov.Title;
        this.Year = mov.Year;
        this.Rated = mov.Rated;
        this.Released = mov.Released;
        this.Runtime = mov.Runtime;
        this.Genre = mov.Genre;
        this.Director = mov.Director;
        this.Writer = mov.Writer;
        this.Actors = mov.Actors;
        this.Plot = mov.Plot;
        this.Language = mov.Language;
        this.Country = mov.Country;
        this.Awards = mov.Awards;
        this.Poster = mov.Poster;
        this.Ratings = mov.Ratings;
        this.Metascore = mov.Metascore;
        this.imdbRating = mov.imdbRating;
        this.imdbVotes = mov.imdbVotes;
        this.imdbID = mov.imdbID;
        this.Type = mov.Type;
        this.DVD = mov.DVD;
        this.BoxOffice = mov.BoxOffice;
        this.Production = mov.Production;
        this.Website = mov.Website;
        this.Response = mov.Response;


    }
}

