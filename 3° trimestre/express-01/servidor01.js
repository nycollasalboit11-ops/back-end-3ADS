import express from 'express'

const app = express()
const porta = 3000

// Rota principal (Home)
app.get('/', (req, res) => {
    res.send('olá, abacaxi!')
})

// Rota de doces (Corrigida e fechada corretamente)
app.get('/doces', (req, res) => {
    res.send(`
        <h1>olá, morango do amor</h1>
        <p>nossa loja de morangos...</p>
        <hr>
        <h3>Cardápio de Doces:</h3>
        <ul>
            <li>🍓 Morango com Chocolate</li>
            <li>🍰 Bolo de Pote</li>
            <li>🍬 Brigadeiro Gourmet</li>
        </ul>
    `)
})

// Nova rota extra para deixar o projeto mais completo (Bebidas)
app.get('/bebidas', (req, res) => {
    res.send(`
        <h1>Sucos Naturais</h1>
        <p>Experimente nosso suco de abacaxi com hortelã!</p>
    `)
})

// Liberar a porta do meu computador
app.listen(porta, () => {
    console.log('🚀 Servidor esta VIVO!')
})
