const jogo = {
    nome: "Tom Clancy's Rainbow Six Siege",
    desenvolvedor: "Ubisoft",
    lancamento: 2015
};

let p1 = document.querySelector("#p1");
p1.innerHTML = `Jogo: ${jogo.nome}<br>
                Desenvolvido por: ${jogo.desenvolvedor}<br>
                Ano do Lançamento: ${jogo.lancamento}`;