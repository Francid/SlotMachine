var objects;
(function (objects) {
    // Define Asset Class 
    var Asset = (function () {
        // Define the class Constructor
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    })();
    objects.Asset = Asset;
})(objects || (objects = {}));
//# sourceMappingURL=asset.js.map