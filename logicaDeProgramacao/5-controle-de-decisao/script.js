let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "));
let calculo = (n1 + n2) / 2;
alert(`A nota do aluno é: ${calculo}`);

if(calculo >= 5) {
    alert("APROVADO");
} else {
    alert("REPROVADO");
}