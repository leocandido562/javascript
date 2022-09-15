var anoAtual = new Date().getFullYear();

for(let i = anoAtual; i >= 1900; i--){
    // document.getElementById("ano").innerHTML += "<option value ='" + i + "'>" + i + "</option>";
    document.getElementById("ano").innerHTML += `<option value ='${i}'> ${i} </option>`;
}