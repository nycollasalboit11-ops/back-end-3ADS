import express from 'express'

const app = express()
const porta = 3000

//criar as rotas  do servidor 
app.get('/',(req, res)=> {
    res.send('ola, abacaxi!')
})
app.get('/doces',(req, res)=> {
    res.send(
        `<h1>olá, morango do amor</h1>
        <p>nossa loja de morangos...</p>
        `)
    
        
})

//liberar a porta do meu computador 
app.listen(porta, () => {console.log('servidor esta VIVO!')})