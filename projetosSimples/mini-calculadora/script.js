const num1 = document.querySelector("#input1");
const num2 = document.querySelector("#input2");
const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const multiplicar = document.querySelector("#multiplicar");
const dividir = document.querySelector("#dividir");
const resultado = document.querySelector("span");

somar.addEventListener("click", somaNum);
function somaNum() {
    resultado.innerHTML = `${Number(num1.value) + Number(num2.value)}`;
}

subtrair.addEventListener("click", subtraiNum);
function subtraiNum() {
    resultado.innerHTML = `${Number(num1.value) - Number(num2.value)}`;
}

multiplicar.addEventListener("click", multiplicaNum);
function multiplicaNum() {
    resultado.innerHTML = `${Number(num1.value) * Number(num2.value)}`;
}

dividir.addEventListener("click", divideNum);
function divideNum() {
    resultado.innerHTML = `${Number(num1.value) / Number(num2.value)}`;
}