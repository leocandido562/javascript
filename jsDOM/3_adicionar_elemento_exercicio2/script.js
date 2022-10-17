let mydiv = document.querySelector(".myDiv");

mydiv.insertAdjacentText("beforebegin","texto1");
mydiv.insertAdjacentText("afterbegin","texto2");
mydiv.insertAdjacentHTML("beforeend", "<p>Texto com HTML</p>");

let elementGreen = document.createElement("p");
elementGreen.innerText = "elemento criado";
mydiv.insertAdjacentHTML("afterend", elementGreen);