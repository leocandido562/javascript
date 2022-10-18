// clonar
let div2 = document.querySelector(".myDiv").cloneNode(true);
document.querySelector(".myDiv").after(div2);

// apagar
//document.querySelectorAll(".myDiv > ul > li")[0].remove()
document.querySelector(".myDiv > ul > li:first-child").remove()
document.querySelector(".myDiv > ul > li:last-child").remove()