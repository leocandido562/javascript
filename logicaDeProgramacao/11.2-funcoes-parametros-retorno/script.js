function calcularAreaAlert() {
   
    let largura = Number(window.prompt("Digite a largura do retângulo: "));
    let altura = Number(window.prompt("Digite a altura lado do retângulo: "));

    var area = calcularArea(largura, altura);

    alert(`A área total é: ${area}`);
}

function calcularAreaOutput() {
    
    let largura = Number(window.prompt("Digite a largura do retângulo: "));
    let altura = Number(window.prompt("Digite a altura lado do retângulo: "));

    var area = calcularArea(largura, altura);

    document.querySelector("#output").innerHTML = `A área total é: ${area}`;
}

function calcularArea(l, a) {

    return l * a;

}