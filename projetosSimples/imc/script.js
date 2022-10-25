const inAltura = document.querySelector("#altura");
const inPeso = document.querySelector("#peso");
const cxResultado = document.querySelector("#resultado");

const btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcular_imc);

function calcular_imc() {
    if((inAltura.value !== "") && (inPeso.value !== "")) {
    let altura = inAltura.value;
    let peso = inPeso.value;
    let imc = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Acima do peso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 41) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    cxResultado.innerHTML = `IMC: ${imc} (${classificacao})`;
    } else {
        cxResultado.innerHTML = "Preencha os campos";
    }
}