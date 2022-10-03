let largura = Number(window.prompt("Digite a largura do retângulo: "));
let altura = Number(window.prompt("Digite a altura lado do retângulo: "));
let area = document.querySelector("#area");
let output = document.querySelector("#output");

function calcularArea(l, a) {
    
    output.innerHTML = l * a;

}

// area.addEventListener("click", function(l, a) {

//     l = largura;
//     a = altura;
//     output.innerHTML = l * a;

// });