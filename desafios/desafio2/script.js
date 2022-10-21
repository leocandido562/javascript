let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let p1 = document.querySelector("#p1");
p1.innerHTML = `${day}/${month}/${year}<br>
                Seja curioso. Leia de tudo. tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade<br>
                Aaron Swartz`;




console.log(date);
console.log(year);
console.log(month);
console.log(day);