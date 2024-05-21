////////////////////////////////////////////////////
////////// Creator: Rafael Silva de Jesus //////////
//////////   Brasília - BR, 05/20/2024    //////////
////////////////////////////////////////////////////

let entrada = gets()
let resultadoDaPartida = entrada.split(' ')
let saldoVitorias = 0
let nivel = ' '
let ganhouOuPerdeu = {}
resultadoDaPartida.forEach(resultado => {
    ganhouOuPerdeu[resultado] = (ganhouOuPerdeu[resultado] || 0) + 1
})

let win = ganhouOuPerdeu.win
let loss = ganhouOuPerdeu.loss
let draw = ganhouOuPerdeu.draw
saldoVitorias = vitoriaEDerrota(win,loss)

if(saldoVitorias <= 10){
    nivel = 'Ferro'
}else if(saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = 'Bronze'
}else if(saldoVitorias >= 21 && saldoVitorias <= 30){
    nivel = 'Prata'
}else if(saldoVitorias >= 31 && saldoVitorias <= 40){
    nivel = 'Ouro'
}else if(saldoVitorias >= 41 && saldoVitorias <= 50){
    nivel = 'Platina'
}else if(saldoVitorias >= 51 && saldoVitorias <= 75){
    nivel = 'Diamante'
}else if(saldoVitorias >= 76 && saldoVitorias <= 100){
    nivel = 'Imortal'
}else if(saldoVitorias >= 101){
    nivel = 'Radiante'
}

function vitoriaEDerrota(v,d){
    return v-d
}

console.log('O Herói tem um saldo de ' + saldoVitorias + ' vitórias e está no nível ' + nivel + '!')

