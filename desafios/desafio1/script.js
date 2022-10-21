// PARTE 1
// variáveis
let nome = "joão Paulo";
let nacionalidade = "Brasileiro";
let idade = 44;
let peso = 106;
let altura = 1.83;

// selecionar elemento
let div1 = document.querySelector("#div1");
let output = document.querySelector("#p1");
output.innerHTML = `Nome: ${nome}<br>
                    Nacionalidade: ${nacionalidade}<br>
                    Idade: ${idade}<br> 
                    peso: ${peso}<br> 
                    Altura: ${altura}`;

// criar e adicionar novo elemento
// let p1 = document.createElement("p");
// p1.innerHTML = `Nome: ${nome}<br> Nacionalidade: ${nacionalidade}<br>Idade: ${idade}<br> peso: ${peso}<br> Altura: ${altura}`;
// div1.appendChild(p1);