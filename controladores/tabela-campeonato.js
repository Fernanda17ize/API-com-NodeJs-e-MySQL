
const Partida = require('../modelos/partidas') 
const Tabela = require('../estrutura/tabelas')

//Funcão - Controle das Rotas.

module.exports = app => {
    

    //GET para exibir a classificação.
    app.get('/campeonato', (req, res) => res.send(
        Tabela.mostraClassificacao(),
     )
    )
  

    //POST para dados das partidas. Times: 1, 2, 3 e 4.
    app.post('/campeonato', (req, res) => {
        const partida = req.body 
        Partida.adiciona(partida)
    })
}
      