let output = document.querySelector("#output");
let criar = document.querySelector("#criar");
let limpar = document.querySelector("#limpar");

criar.addEventListener("click", function criar(){

    let num = Number(window.prompt("Digite o número: "));

    let mensagem = "";

    for(let i = 1; i <= 10; i++) {
        mensagem += `${num} x ${i} = ${num*i}<br>`;
    }

    output.innerHTML = mensagem;

});

limpar.addEventListener("click", function limpar(){

    output.innerHTML = "";

});

