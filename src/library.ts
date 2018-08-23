class Library {

    items: Item[] = [];

    targetElement: HTMLElement = document.getElementById("items");

    constructor(items: Item[]){
        this.items = items;
    }

    printItems(): Item[] {
        if(this.items.length > 0){
            this.items.forEach(i => {
                return i.render(this.targetElement);
            });
        }
        else {
            return null;
        }
    }

}