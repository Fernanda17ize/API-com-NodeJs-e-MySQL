const Partida = require ('../modelos/partidas') 
const Tabela = require('../estrutura/tabelas')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const usuarios = require('../usuarios.json')
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Funcão - Controle das Rotas.//

module.exports = app => {

    
        //LOGIN PARA ACESSO
        app.post('/login', (req, res) => {
         const usuario = usuarios.find(usr => usr.email === req.body.email);
            if (usuario) {
            if (usuario.senha === req.body.senha )
            { const token = jwt.sign({usrID: usuario.id}, 'MeuSegredo', {expiresIn: "49m"});
                res.status(200).json({token})
            } else {
                res.status(401).json({message: "Senha Inválida"})}
            } else {
                res.status(401).json({message: "Usuário Inválido"}) 
    }})
 

        //POST para dados das partidas. Times: 1, 2, 3 e 4.
        app.post('/campeonato', checkToken, (req, res) => {
            const partida = req.body 
            Partida.adiciona(partida)
        })


        //GET para Exibir as Partidas do Campeonato.
        app.get('/campeonato', checkToken, (req, res) => res.send(
             Tabela.mostraCampeonato()
     )
    )
    
        //GET para exibir a Classificação dos times.
        app.get('/classificacao', checkToken, (req, res) => res.send(
            Tabela.mostraClassificacao()
     )) 
    }


        // MIDDLEWARE
    function checkToken (req, res, next) {
        const token = req.headers['token-acesso']; if (token) 
        { jwt.verify(token, 'MeuSegredo', (err, decoded) => {
        if (err) {
            res.status(401).json({message: 'Token inválido'})
        } else { 
            console.log('Sucesso')
            req.usrID = decoded.usrID;
            next()
            }}) 
        } else {
            res.status(401).json({message: 'Login não realizado'}) 
    }};
