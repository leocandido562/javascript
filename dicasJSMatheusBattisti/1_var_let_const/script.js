// escopo var
var nome = "Pedro"; // global

function dizerNome() {
    var nome = "João"; // local
    console.log("O nome é " + nome);
}

if(true) {
    var nome = "Salete";
    console.log(nome);
}

console.log(nome);
dizerNome();
/* ---------------------------- */

// escopo let
let letra = "A"; // global

function dizerLetra() {
    let letra = "B"; // local 1
    console.log("A letra é: " + letra);
}

if(true) {
    let letra = "C"; // local 2
    console.log(letra);
}

console.log(letra);
dizerLetra();
/* ---------------------------- */

const numero = 1; // global

function dizerLetra() {
    const numero = 2; // local 1
    console.log("O número é " + numero);
}

if(true) {
    const numero = 3; // local 2
    console.log(numero);
}

console.log(numero);
dizerLetra();