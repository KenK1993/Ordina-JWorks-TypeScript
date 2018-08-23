let jsonParser = new JSONParser();

var library: Library = new Library(null,null);

jsonParser.getJSON("items.json", data => {
    library = Library.fromJSON(data);

    var itemContainer: HTMLElement = document.getElementById("items");

    library.getAll().forEach(item => item.render(itemContainer));

});