class Library {

    items:Array<Item>;

    constructor(public books: Array<Book>,public movies:Array<Movie>){

    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }
    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }

    addMovie($event){
        console.log("Add movie was clicked....");
        let elem: HTMLElement = document.getElementById("items");
        let newItem: Item = new Movie("TestMovie","TestGenre","This is a test description for movie",1993,"TestName");
        this.items.push(newItem);
        newItem.render(elem);
    }

    addBook($event){
        console.log("Add Book was clicked....");
        let elem: HTMLElement = document.getElementById("items");
        let newItem: Item = new Book("TestBook",new Author("Ken Keymolen"),"TestGenre","This is a test description for book");
        this.items.push(newItem);
        newItem.render(elem);
    }
}