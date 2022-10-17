// Criar elemento, colocar classe e valor
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");

p1.className = "vermelho";
p2.className = "vermelho";
p3.className = "vermelho";
p4.className = "vermelho";


p1.innerText = "Novo elemento 1";
p2.innerText = "Novo elemento 2";
p3.innerText = "Novo elemento 3";
p4.innerText = "Novo elemento 4";

let mydiv = document.querySelector("div");

mydiv.before(p1);
mydiv.prepend(p2);
mydiv.append(p3);
mydiv.after(p4);