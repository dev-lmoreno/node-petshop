const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor na porta 3000'))

app.get('/', () => console.log('Rota inicial'))

app.get('/attendance', (req, res) => res.send('Rota de atendimento'))
