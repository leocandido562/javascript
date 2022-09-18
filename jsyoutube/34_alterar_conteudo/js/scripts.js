// selecionar elemento
var title = document.querySelector("#title");

// innerHTML
title.innerHTML = "Testando o texto alterado!";

// textContent -> mais utilizado, recomendado e performático
var subtitle = document.querySelector(".subtitle");
subtitle.textContent = "Testando o textContent!";