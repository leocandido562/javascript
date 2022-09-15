let data = new Date();

// MOSTRA MÊS ESCRITO
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

// MOSTRA DIA ESCRITO
const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
let diaEscrito = diasDaSemana[data.getDay()];
console.log(diaEscrito);