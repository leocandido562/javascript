let mais = document.querySelector("#mais");
let menos = document.querySelector("#menos");
let multiplica = document.querySelector("#multiplica");
let divide = document.querySelector("#divide");

let n1 = Number(window.prompt("Digite um número: "));
escreve(n1);

function escreve(mensagem) {
    let output = document.querySelector("#output");
    output.innerHTML = mensagem;

}

function iniciarCalculo(simbolo) {
    var n1 = Number(document.querySelector("#output").textContent);

    var n2 = Number(prompt("Digite outro número: "));

    try{
        var msg = calcular(simbolo, n1, n2);
    } catch(e) {
        alert(e);
        return // pra nao chamar a funçao escreve que coloca undefined na tela
    }

    escreve(msg);
}

function calcular(simbolo, n1, n2) {

    if(simbolo !== "+" && simbolo !== "-" && simbolo !== "*" && simbolo !== "/") {
        throw new Error("Digite um símbolo válido");
    }

    if(isNaN(n1) || isNaN(n2)) {
        throw new Error("Chama passando somente números");
    }
    
    var numeroCalculado = null;

    switch(simbolo){
        case "+":
            numeroCalculado = n1 + n2;
           break;
        case "-":
            numeroCalculado = n1 - n2;
            break;
        case "*":
            numeroCalculado = n1 * n2;
            break;
        case "/":
            numeroCalculado = n1 / n2;
            break;
    }

    return numeroCalculado;

}