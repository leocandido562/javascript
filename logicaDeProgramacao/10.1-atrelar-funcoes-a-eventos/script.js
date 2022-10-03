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

mais.addEventListener("click", function() {

    let num2 = Number(window.prompt("Digite um número: "));
    num = num + num2;
    escreve();

});

menos.addEventListener("click", function() {

    let num2 = Number(window.prompt("Digite um número: "));
    num = num - num2;
    escreve();

    
});

multiplica.addEventListener("click", function() {

    let num2 = Number(window.prompt("Digite um número: "));
    num = num * num2;
    escreve();
    

});

divide.addEventListener("click", function() {

    let num2 = Number(window.prompt("Digite um número: "));
    num = num / num2;
    escreve();
    
});