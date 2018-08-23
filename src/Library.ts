class Library {
    items:Array<Item> = [];
    books: Array<Book> = [];
    movies: Array<Movie> = [];

    constructor(books: Array<Book>, movies: Array<Movie>){
        this.books = books;
        this.movies = movies;
    }

    static fromJSON(data: any) : Library {
       // todo Initialise the two arrays with the external json resource

        console.log("Library: " + data);
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }

    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }

}