
const conexao = require ('../estrutura/conexao')

class Times {

    cria(times) {
        var sql = ' INSERT INTO times VALUES (1,"Gremio"), (2,"Fortaleza"), (3,"Avai"), (4,"Atletico") '
       conexao.query(sql, times, ( erro, resultados ) => { 
           if(erro) {
           console.log(erro)
       } else {
           console.log(resultados)
       }
    })
    
    }

}

    module.exports = new Times
