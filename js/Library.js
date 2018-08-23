var Library = /** @class */ (function () {
    function Library(books, movies) {
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        var books = data.books.map(function (val) { return Book.fromJSON(val); });
        var movies = data.movies.map(function (val) { return Movie.fromJSON(val); });
        return new Library(books, movies);
    };
    Library.prototype.getAll = function () {
        this.items = this.books.concat(this.movies);
        return this.items;
    };
    Library.prototype.addMovie = function ($event) {
        console.log("Add movie was clicked....");
        var elem = document.getElementById("items");
        var newItem = new Movie("TestMovie", "TestGenre", "This is a test description for movie", 1993, "TestName");
        this.items.push(newItem);
        newItem.render(elem);
    };
    Library.prototype.addBook = function ($event) {
        console.log("Add Book was clicked....");
        var elem = document.getElementById("items");
        var newItem = new Book("TestBook", new Author("Ken Keymolen"), "TestGenre", "This is a test description for book");
        this.items.push(newItem);
        newItem.render(elem);
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map