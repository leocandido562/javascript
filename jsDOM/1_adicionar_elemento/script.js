// Criar elemento, colocar classe e valor
let newElement = document.createElement("p");
newElement.className = "vermelho";
newElement.innerText = "Novo elemento";

// Adicionar elemento na div e clonar
let mydiv = document.querySelector("div");
mydiv.appendChild(newElement);
mydiv.appendChild(newElement.cloneNode(true));