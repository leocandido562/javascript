function change_background_to_red() {
    document.querySelector("html").style.backgroundColor = "red";
}

document.querySelector("#botao2").addEventListener("click", change_background_to_blue);

function change_background_to_blue() {
    document.querySelector("html").style.backgroundColor = "blue";
}

document.querySelector("#botao3").addEventListener("click", remove_events);

function remove_events() {
    document.querySelector("html").style.backgroundColor = "gray";

    document.querySelector("#botao2").removeEventListener("click", change_background_to_blue);
}