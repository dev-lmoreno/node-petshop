const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.log('Servidor na porta 3000'))

app.get('/', () => console.log('Rota inicial'))