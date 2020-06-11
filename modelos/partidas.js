const conexao = require ('../estrutura/conexao')

// Inserir partidas
class Partida {
    adiciona(partida) {   
        var inserirPartidas = ' INSERT INTO jogos SET ? '
        conexao.query(inserirPartidas, partida, ( erro, resultados ) => { 
            if(erro) {
            console.log(erro)
        } else {
            console.log(resultados)
         }
            })
}}
    module.exports = new Partida

     