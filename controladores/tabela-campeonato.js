const Partida = require('../modelos/partidas') 
var mysql = require('mysql');

//Funcão - Controlar quais as rotas

module.exports = app => {
    
    app.get('/campeonato', (req, res) => res.send(       ))

    app.post('/campeonato', (req, res) => {
        const partida = req.body 
        //conteudo do body é a partida
        Partida.adiciona(partida)
     res.send('Voce este na rota da tabela e esta realizando um POST')
    })
}

