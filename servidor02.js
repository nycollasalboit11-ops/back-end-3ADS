import express from 'express'
import path from 'path'
const dirBase = import.meta.dirname
const app = express()
const porta = 3000

app.use (express.static (path.join(import.meta.dirname, 'publico')))

app.get('/'(req, res) =>{
res.sendfile('paginas/index.html', {root: import.meta.dirname})
})

app.listen(porta, ()=>{console.log ('servidor esta vivo ')})