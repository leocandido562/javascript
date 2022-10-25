const btnDeleteAll = document.querySelector(".header button");
const btnInsert = document.querySelector(".divInsert button");
const texto = document.querySelector("input");
const ul = document.querySelector("ul");

var itensDB = [];

texto.addEventListener("keypress", e => {
    if(e.key === "Enter" && texto.value !== "") {
        setItemDB();
    }
})

btnInsert.onclick = () => {
    if (texto.value !== "") {
        setItemDB();
    }
}

function setItemDB() {
    if(itensDB.length >= 20) {
        alert("Limite máximo de 20 itens atingido!")
        return
    }

    itensDB.push({item: texto.value, status: ""})
    updateDB();
}

function updateDB() {
    localStorage.setItem("todoList", JSON.stringfy(itensDB))
    loadItens()
}

function loadItens() {
    ul.innerHTML = "";
    itensDB = JSON.parse(localStorage.getItem("todoList")) ?? []
    itensDB.forEach((item, i) => {
        insertItemTela(item.item, item.status, i)
    })
}