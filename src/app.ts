
let jsonParser = new JSONParser();
let library:Library;

jsonParser.getJSON("items.json", data => {
    library = Library.fromJSON(data);

    let itemContainer: HTMLElement = document.getElementById("items");
    library.getAll().forEach(item => item.render(itemContainer));

});