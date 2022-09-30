let n1 = Number(prompt("Digite um número: "));

// for(let i = 0; i <= 1000; i++) {

//     let calculo = n1 * i;

//     document.write(`${n1} x ${i} = ${calculo} <br>`);
// }

let indice = 0;

while(indice <= 1000) {

    document.write(`${n1} x ${indice} = ${n1*indice} <br>`);

    if(indice % 10 === 0 && indice > 0) {
        document.write("<hr>");
    }

    indice++;

}