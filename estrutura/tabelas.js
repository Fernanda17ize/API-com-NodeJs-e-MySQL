

class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarPartidas(), 
        this.criarTimes()
    }

    criarPartidas() {
        var sql = 'CREATE TABLE IF NOT EXISTS jogos (id int auto_increment, mandante int, visitante int, golmandante tinyint, golvisitante tinyint, primary key(id))'
          
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Jogos criada com sucesso')
            }   }        
        )};
        
        criarTimes() {
            var sql = 'CREATE TABLE IF NOT EXISTS times (id int primary key auto_increment, nometime char(32))' 


            this.conexao.query(sql, (erro) => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log('Tabela Times criada com sucesso')
                }   }        
            )}
         

} 
module.exports = new Tabelas