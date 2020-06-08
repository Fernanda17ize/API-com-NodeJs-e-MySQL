const conexao = require ('../estrutura/conexao')

class Partida {

    adiciona(partida) {   
        var sql = ' INSERT INTO jogos SET ? '

        conexao.query(sql, partida, ( erro, resultados ) => { 
            if(erro) {
            console.log(erro)
        } else {
            console.log(resultados)
        }
    
    })
}
}

    module.exports = new Partida