let botao = document.querySelector("#botao1").addEventListener("click", muda_texto_fundo);

function muda_texto_fundo() {
    let elemento = document.querySelector("h1");
    let botao = document.querySelector("#botao1");
    if(elemento.style.backgroundColor == "") {
        botao.textContent = "Fundo Transparente";
        elemento.style.backgroundColor = "yellow";
    } else {
        botao.textContent = "Fundo Amarelo";
        elemento.style.backgroundColor = "";
    }
}