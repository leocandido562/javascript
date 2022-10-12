var arr = new Array(25, 30, 45, 28, 0, 12, 78, 64);

// mostrar na tela a soma dos números pares da array acima

var somaDosPares = somaOsPares(arr);

var output = document.querySelector("#output").innerHTML = `A soma dos números pares é: ${somaDosPares}`;

function somaOsPares(arr){
    var soma = 0;
    for(var i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i]) && arr[i] % 2 === 0) {
            soma += arr[i];
        } 
    }
    return soma;
}