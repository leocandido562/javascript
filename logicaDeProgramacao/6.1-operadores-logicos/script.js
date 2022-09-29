let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;

alert(`Sua média é: ${media}`);

if(nota1 === 0 || nota2 === 0 || media < 5) {
    alert("REPROVADO!!!");
} else {
    alert("Parabéns, APROVADO!!!");
}