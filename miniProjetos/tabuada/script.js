let inputNumber = document.querySelector("#input-number").value;

let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {

    let tabuada = document.querySelector("#tabuada").textContent = inputNumber;

    for(let i = 1; i <= 10; i++){

        let calculo = tabuada * i;

        let option = document.querySelector("#op");
        option = calculo;

    };
});

// function isNumeric(num){
//     return !isNaN(num)
//   }