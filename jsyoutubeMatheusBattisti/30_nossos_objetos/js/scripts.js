let pessoa = {
    nome: "Leonardo",
    idade: 20,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b){
        return a + b;
    }
};

console.log(pessoa.nome);
pessoa.falar();
let soma = pessoa.soma(2, 2);
console.log(soma);