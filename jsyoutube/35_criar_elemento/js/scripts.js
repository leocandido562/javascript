// createElement
var novoParagrafo = document.createElement("p");

// createTextNode
var texto = document.createTextNode("Este é o conteúdo do parágrafo");

// appendChild
novoParagrafo.appendChild(texto);

// inserir o elemento no body
var body = document.querySelector("body");

body.appendChild(novoParagrafo);

console.log(novoParagrafo);

// inserir em um container

var container = document.querySelector("#container");

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto do span"));

container.appendChild(el);

console.log(el);