const express = require('express')
const consign = require('consign')

// essa function está sendo exportada e será acessada no index.js
module.exports = () => {
    const app = express()

    // inserindo a pasta controller dentro de módulo app
    consign().include('controller').into(app)

    return app
}