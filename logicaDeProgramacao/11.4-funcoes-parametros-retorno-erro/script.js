calcularAreaAlert();

function calcularAreaAlert() {
   
    let largura = Number(window.prompt("Digite a largura do retângulo: "));
    let altura = Number(window.prompt("Digite a altura lado do retângulo: "));

    try {
        var area = calcularArea(largura, altura);
    } catch (e) {
        area = e;
    }

    alert(`A área total é: ${area}`);
}

function calcularAreaOutput() {
    
    let largura = Number(window.prompt("Digite a largura do retângulo: "));
    let altura = Number(window.prompt("Digite a altura lado do retângulo: "));

    try {
        var area = calcularArea(largura, altura);
    } catch (e) {
        area = e;
    }

    document.querySelector("#output").innerHTML = `A área total é: ${area}`;
}

function calcularArea(l, a) {
    // verifica se a funçao recebeu os dois parametros
    if(l === undefined || a === undefined) {
        throw new Error("calcularArea precisa receber dois números");
    }

    // verifica se os parametros sao numeros
    if(isNaN(l) || isNaN(a)) {
        throw new Error("apenas números");
    }

    return l * a;
}