const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalID = null;

const trafficLight = (event) => {
    // console.log(event.target.id);
    stopAutomatic();
    turnOn[event.target.id](); 
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ["red", "yellow", "green"]
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalID);
}

const turnOn = {
    "red":      () => img.src = "./img/vermelho.png",
    "yellow":   () => img.src = "./img/amarelo.png",
    "green":    () => img.src = "./img/verde.png",
    "automatic": () => intervalID = setInterval(changeColor, 1000)
    //a cada 1000ms(1s), vai executar a funçao changeColor
}


buttons.addEventListener("click", trafficLight);