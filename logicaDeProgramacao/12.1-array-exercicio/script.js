var dias = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");

var hoje = new Date();
var diaSemana = hoje.getDay(); // retorna o dia da semana

/*
0 - domingo
1 - segunda
...
6 - sabado
*/

// switch(diaSemana) {
//     case 0:
//         alert(`Bem vindo, hoje é ${dias[0]}`)
//         break;
//     case 1: 
//         alert(`Bem vindo, hoje é ${dias[1]}`)
//         break;
//     case 2: 
//         alert(`Bem vindo, hoje é ${dias[2]}`)
//         break;
//     case 3: 
//         alert(`Bem vindo, hoje é ${dias[3]}`)
//         break;
//     case 4: 
//         alert(`Bem vindo, hoje é ${dias[4]}`)
//         break;
//     case 5: 
//         alert(`Bem vindo, hoje é ${dias[5]}`)
//         break;
//     case 6: 
//         alert(`Bem vindo, hoje é ${dias[6]}`)
//         break;
// }

alert(`Bem vindo, hoje é ${dias[diaSemana]}`)