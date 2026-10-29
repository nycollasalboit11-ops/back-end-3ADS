import express from 'express'
import path from 'path'

const dirBase = import.meta.dirname
const app = express()
const porta = 3000

// Middleware para o Express entender JSON
app.use(express.json())

// Configura a pasta de arquivos estáticos corretamente apontando para 'paginas'
app.use(express.static(path.join(dirBase, 'src', 'paginas')))

// Banco de dados simulado de produtos para sua página usar
let listaProdutos = [
    { id: 1, nome: "Notebook Gamer", preco: 4599.90 },
    { id: 2, nome: "Mouse Sem Fio", preco: 89.90 },
    { id: 3, nome: "Teclado Mecânico", preco: 250.00 }
]

// --- ROTAS DAS SUAS PÁGINAS ---

// Rota principal (Home)
app.get('/', (req, res) => {
    res.sendFile('src/paginas/index.html', { root: dirBase })
})

// Rota de produtos (A que você criou na linha 13)
app.get('/produtos', (req, res) => {
    res.sendFile('src/paginas/produtos.html', { root: dirBase })
})

// --- ROTA DA API (Para enviar os dados dos produtos para o HTML) ---
app.get('/api/produtos', (req, res) => {
    res.json(listaProdutos)
})

// Liga o servidor
app.listen(porta, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${porta}`)
})
