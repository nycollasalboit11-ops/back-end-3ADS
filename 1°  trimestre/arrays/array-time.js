// um array é um grupo indexado de valores
// podem ser homogêneo / heteogêneo
//seus índices  vão de "0" ... "infinito"
//possuem funçõe nativas (prontas)
//podem ser iterados e checados

const time = ['maria' ,'clara', 'pan', true , 56]
    // inices     0       1       2
time[55] // undefined
for (const jogador of time) {
    console.log("jogador: " +jogador)
    
} 