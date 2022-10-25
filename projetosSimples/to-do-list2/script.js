const input = document.querySelector(".taskInput");
const btnInput = document.querySelector(".btnInput");
const list = document.querySelector("li");

btnInput.addEventListener("click", setTask);
function setTask() {
    if(input.value === "") {
        alert("Digite algo!")
    } else {
        list.appendChild(input.cloneNode(true));
        input.value = "";
    }
}