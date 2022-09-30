let ano = 1004;

while(ano <= 2022) {

    if((ano % 100 === 0) && !(ano % 400 === 0)) {
        document.write(`${ano} não é bissexto<br>`);
    } else {
        document.write(`${ano}<br>`);
    }

    ano = ano + 4;
}