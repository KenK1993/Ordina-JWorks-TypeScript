

class Book extends Item {

    author: Author;

    constructor(title: string, genre: string, description: string, author: Author){
        super(title, genre, description);
        this.author = author;
    }

    render(el: HTMLElement){
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.genre + "</p>" +
            "<span>" + this.description + "</span>" + "<br><br>" +
            "<span> Written by: " + this.author.name + "</span>";

        el.appendChild(article);
    }
}