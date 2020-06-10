
 
const Partida = require('../modelos/partidas') 
const Tabela = require('../estrutura/tabelas')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

//Funcão - Controle das Rotas.


module.exports = app => {
    
    const usuarios = []
    //  login    
    app.get('/usuarios', (req, res) => {
        res.json(usuarios)  })
    app.use(express.json())
    

    //  login post
    app.post('/usuarios', async (req, res) => {
        try {
            const hashedSenha = await bcrypt.hash(req.body.senha, 10)
            const usuario = { nome:req.body.nome, senha: hashedSenha }
        usuarios.push(usuario)
        res.status(201).send()
        } catch {
            res.status(500).send()
        }
     } )

     app.post('/usuarios/login', async (req, res) => {
         const usuario = usuarios.find(usuario => usuario.nome === req.body.nome)
         if (usuario == null) {
            return res.status(400).send('Usuario não encontrado') 
         }
         try {
            if(await bcrypt.compare(req.body.senha, usuario.senha)) {
            res.send('Sucesso')
         } else {
             res.send('Sem permissão')
         }        
        } catch {
             res.status(500).send()
         }
     }
     )


    //GET para exibir a Classificação dos times.
    app.get('/classificacao', (req, res) => res.send(
        Tabela.mostraClassificacao(),
     )
    )

    //GET para as Partidas do Campeonato.
    app.get('/campeonato', (req, res) => res.send(
        Tabela.mostraCampeonato(),
     )
    )

    //POST para dados das partidas. Times: 1, 2, 3 e 4.
    app.post('/campeonato', (req, res) => {
        const partida = req.body 
        Partida.adiciona(partida)
    })
} 
       