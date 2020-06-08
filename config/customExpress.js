
//Funcão - Configura o Express

const express = require ('express')
const consign = require ('consign')
const bodyParser = require ('body-parser')


module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

// **consign** organiza as rotas: 
    consign()
        .include('controladores')
        .into(app)

return app
}

