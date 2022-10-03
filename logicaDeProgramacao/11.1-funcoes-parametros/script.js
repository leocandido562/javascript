let mais = document.querySelector("#mais");
let menos = document.querySelector("#menos");
let multiplica = document.querySelector("#multiplica");
let divide = document.querySelector("#divide");

let num = Number(window.prompt("Digite um número: "));
escreve()

function escreve() {
    let output = document.querySelector("#output");
    output.innerHTML = num;

}

function calcular(simbolo) {
    let num2 = Number(window.prompt("Digite outro número: "));

    switch(simbolo){
        case "+":
           num += num2;
           break;
        case "-":
            num -= num2;
            break;
        case "*":
            num *= num2;
            break;
        case "/":
            num /= num2;
            break;
    }

    escreve()
}