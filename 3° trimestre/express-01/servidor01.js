import express from 'express'

const app = express()
const porta = 3000

//criar as rotas  do servidor 
app.get('/',(req, res)=> {
    res.send('ola, abacaxi!')
})

//liberar a porta do meu computador 
app.listen(porta, () => {console.log('servidor esTA VIVO!')})