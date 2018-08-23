var author = new Author("Ken Keymolen");
var items = [
    new Book("Test Book - 1", "Testing", "This is a Test Description for the first book", author),
    new Book("Test Book - 2", "Testing", "This is a Test Description for a second book", author),
    new Movie("Test Movie - 1", "Testing", "This is a Test Description for a movie"),
    new Movie("Test Movie - 2", "Testing", "This is a Test Description for a movie"),
];
var library = new Library(items);
library.printItems();
//# sourceMappingURL=app.js.map