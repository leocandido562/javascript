let cxNome = document.querySelector("#nome");
let cxIdade = document.querySelector("#idade");
let cxPeso = document.querySelector("#peso");
let cxAltura = document.querySelector("#altura");
let cxResultadoImc = document.querySelector("#resultadoImc");

let btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.addEventListener("click", calcular_imc);

function calcular_imc() {
    let nome = cxNome.value;
    let idade = cxIdade.value;
    let peso = cxPeso.value;
    let altura = cxAltura.value;
    let imc = (peso * (altura * altura));

    cxResultadoImc.value = imc
};