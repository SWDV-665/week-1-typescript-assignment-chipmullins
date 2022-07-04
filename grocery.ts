class Grocery {
  
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}


let grocery_list = [
    new Grocery("Milk", 7, 10),
    new Grocery("Bread", 3, 14),
    new Grocery("Egg", 14, 19)
]

const ele = document.getElementById("app");

grocery_list.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});