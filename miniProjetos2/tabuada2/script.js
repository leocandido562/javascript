function tabuada() {
    let num = document.querySelector("#txtn").value;
    let tab = document.querySelector("#seltab");
    if(num.length == 0) {
        window.alert("Por favor, digite um número!");
    } else {
        let n = Number(num);
        tab.innerHTML = "";
        for(let i = 1; i <= 10; i++) {
            let item = document.createElement("option");
            item.text = `${n} x ${i} = ${n*i}`;
            tab.appendChild(item);
        }
    }
}