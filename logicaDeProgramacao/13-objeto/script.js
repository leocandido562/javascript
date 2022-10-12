const product = {
    name: "pen",
    amount: 4,
    price: 20.70,
    comprar: function(qtd){
        if(!qtd) {
            qtd = 1;
        }
        console.log("comprou caneta")
        this.amount -= qtd;
        console.log(this.amount);
    }
}

var msg = `name: ${product.name}<br> amount: ${product.amount}<br> price: ${product.price}`;

var output = document.querySelector("#output").innerHTML = msg;