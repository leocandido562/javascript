var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
    console.log('Voto opcional')
} else if (idade < 18 || idade > 65) {
} else {
    console.log('Voto obrigatório')
}