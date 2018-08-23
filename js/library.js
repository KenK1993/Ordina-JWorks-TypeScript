var Library = /** @class */ (function () {
    function Library(items) {
        this.items = [];
        this.targetElement = document.getElementById("items");
        this.items = items;
    }
    Library.prototype.printItems = function () {
        var _this = this;
        if (this.items.length > 0) {
            this.items.forEach(function (i) {
                return i.render(_this.targetElement);
            });
        }
        else {
            return null;
        }
    };
    return Library;
}());
//# sourceMappingURL=library.js.map