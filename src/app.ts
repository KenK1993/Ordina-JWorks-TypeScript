let author: Author = new Author("Ken Keymolen");

let items: Item[] = [
    new Book("Test Book - 1", "Testing", "This is a Test Description for the first book", author),
    new Book("Test Book - 2", "Testing", "This is a Test Description for a second book", author),
    new Movie("Test Movie - 1", "Testing", "This is a Test Description for a movie"),
    new Movie("Test Movie - 2", "Testing", "This is a Test Description for a movie"),
];

let library: Library = new Library(items);

library.printItems();

