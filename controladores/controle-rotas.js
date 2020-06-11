
const Partida = require('../modelos/partidas') 
const Tabela = require('../estrutura/tabelas')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')

//Funcão - Controle das Rotas.//

module.exports = app => {

        //POST para dados das partidas. Times: 1, 2, 3 e 4.
        app.post('/campeonato', (req, res) => {
            const partida = req.body 
            Partida.adiciona(partida)
        })

        //GET para Exibir as Partidas do Campeonato.
        app.get('/campeonato', (req, res) => res.send(
             Tabela.mostraCampeonato()
     )
    )
        //GET para exibir a Classificação dos times.
        app.get('/classificacao', (req, res) => res.send(
            Tabela.mostraClassificacao()
     )
    ) }

   