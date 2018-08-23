class Movie extends Item implements Rating {

    age: number;
    name: string;

    constructor(title: string, genre: string, description: string){
        super(title, genre, description);
    }

    render(el: HTMLElement){
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.genre + "</p>" +
            "<span>" + this.description + "</span>";

        el.appendChild(article);
    }


}