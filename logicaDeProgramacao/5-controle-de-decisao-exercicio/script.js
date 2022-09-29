let player1 = Number(prompt("Jogador 1, digite um número: "));
let player2 = Number(prompt("Jogador 2, digite um número: "));
alert(`Jogador 1 digitou: ${player1}
Jogador 2 digitou: ${player2}`);

let sortNum = parseInt(Math.random() * 2);
alert(`O número sorteado foi: ${sortNum}`);

if((sortNum === 0) && (player1 < player2)) {
    alert("JOGADOR 1 VENCEU!!!");
} else if((sortNum === 0) && (player2 < player1)) {
    alert("JOGADOR 2 VENCEU!!!");
} else if((sortNum === 1) && (player1 > player2)) {
    alert("JOGADOR 1 VENCEU!!!");
} else if((sortNum === 1) && (player2 > player1)) {
    alert("JOGADOR 2 VENCEU!!!");
} else {
    alert("EMPATE!!!");
}