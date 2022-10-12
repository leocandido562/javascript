var produtos = [
    {nome: "caneta", qtdEstoque: 5, preco: 2.5},
    {nome: "lápis", qtdEstoque: 6, preco: 0.25}
];

var msg = "";

for(var i = 0; i < produtos.length; i++) {
    console.log(produtos[i].preco);

    msg += `<h2>Produto: ${produtos[i].nome}</h2>`;
    msg += `<p>Preço: R$ ${produtos[i].preco}</p>`;
    msg += `<p>Quantidade: ${produtos[i].qtdEstoque}</p>`;

}

document.querySelector("#output").innerHTML = msg;