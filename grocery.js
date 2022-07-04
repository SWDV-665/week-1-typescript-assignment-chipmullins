var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var grocery_list = [
    new Grocery("Milk", 7, 10),
    new Grocery("Bread", 3, 14),
    new Grocery("Egg", 14, 19)
];
var ele = document.getElementById("app");
grocery_list.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "".concat(e.name, " ").concat(e.quantity, " -> $").concat(e.price);
    ele.appendChild(p);
});
