// input number
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

// buttons
const soma = document.querySelector("#soma");
const subtrai = document.querySelector("#subtrai");
const multiplica = document.querySelector("#multiplica");
const divide = document.querySelector("#divide");

// input result
const result = document.querySelector("#showResult");

// functions
function somaNum(n1, n2) {
    return n1 + n2;
}

function subtraiNum(n1, n2) {
    return n1 - n2;
}

function multiplicaNum(n1, n2) {
    return n1 * n2;
}

function divideNum(n1, n2) {
    return n1 / n2;
}

// events
soma.addEventListener("click", function(e) {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    result.value = somaNum(number1, number2);
    e.preventDefault()
})

subtrai.addEventListener("click", function(e) {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    result.value = subtraiNum(number1, number2);
    e.preventDefault()
})

multiplica.addEventListener("click", function(e) {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    result.value = multiplicaNum(number1, number2);
    e.preventDefault()
})

divide.addEventListener("click", function(e) {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    result.value = divideNum(number1, number2);
    e.preventDefault()
})