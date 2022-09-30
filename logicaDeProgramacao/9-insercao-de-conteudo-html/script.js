let output = document.querySelector("#output");

let mensagem = "";

for(let i = 1; i <= 1001; i++) {
    mensagem += `i: ${i}<br>`;
}

output.innerHTML = mensagem;