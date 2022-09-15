function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();
    let erro = document.getElementById("teste").value;

    switch (cor) {
        case "azul":
            document.getElementById("teste").innerHTML = "";
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.getElementById("teste").innerHTML = "";
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.getElementById("teste").innerHTML = "";
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponível para: " + cor;
    }

}