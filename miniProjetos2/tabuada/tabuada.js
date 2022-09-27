function calcular() {
    /* 
    ir buscar o valor
    criar um texto vazio que vai ser atualizado com a tabuada
    adicionar sequencialmente ao texto vazio o resultado de cada cálculo
    apresentar o texto completo da tabuada
    */

    let valor = parseInt(document.querySelector("#valor").value);
    let texto = "";

    for(let i = 1; i <= 10; i++){
        texto = `${texto + i} x ${valor} = ${i * valor}<br>`;
    }

    document.querySelector("#resultado").innerHTML = texto;
}