let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite outro número: "));

alert(`A média entre ${n1} e ${n2} é ${(n1+n2)/2}`);

if((n1+n2)/2 > 5) {
    alert("A média é maior que cinco");
} else {
    alert("A média é menor que cinco");
}