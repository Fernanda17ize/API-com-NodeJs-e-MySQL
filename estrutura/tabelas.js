
//Criar Tabelas automaticamente 1. Cria os 4 Times. 2. Cria as Partidas (Postman) 3. Query para Exibir Tabelas. 4. Query para filtrar resultados.

class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarPartidas(), 
        this.criarTimes()
    }


    //Tabela inserir as 4 equipes - 1 Gremio,2 Fortaleza,3 Avai, 4 Atletico - automaticamente.     
    criarTimes() {
        var sqlCriarTabelaTimes = 'CREATE TABLE IF NOT EXISTS Equipes (id int primary key auto_increment, nometime char(32))' 
        var inserirTimes = ' INSERT INTO equipes VALUES (1,"Gremio"), (2,"Fortaleza"), (3,"Avai"), (4,"Atletico") '
        this.conexao.query(sqlCriarTabelaTimes, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Times criada com sucesso')
    
                this.conexao.query(inserirTimes, (erro) => {
                    if(erro) {
                        console.log('Times Já Inseridos')
                    } else {
                        console.log('Times inseridos com sucesso')
                    }}                           
                )}  
            }      )}

    //Tabela para inserir as Partidas manualmente. 
        criarPartidas() {
            var sqlCriarPartidas = 'CREATE TABLE IF NOT EXISTS jogos (id int auto_increment, mandante int, golmandante tinyint, visitante int, golvisitante tinyint, primary key(id))'
            this.conexao.query(sqlCriarPartidas, (erro) => {
                if(erro) {
                    console.log(erro)
                 } else {
                     console.log('Tabela Jogos criada com sucesso')
                       }}      
             )}
    
 
    //Mostra as Partidas.
            mostraCampeonato() {
                var sqlCampeonato = 'SELECT * FROM Jogos'
                this.conexao.query(sqlCampeonato, function(erro, rows) {
                    if (erro) throw erro;
                    console.table(rows)
                })
            }

 
    //Mostra a Classificação Final. 
            mostraClassificacao() {
                var sqlClassificacao = 'SELECT nometime AS Equipes,  Sum(PARTIDA) AS PARTIDA, Sum(VITORIA) AS VITORIA, Sum(EMPATE) AS EMPATE, Sum(DERROTA) AS DERROTA,  SUM(GP) as GP, SUM(GC) AS GC, SUM(DIF) AS DIF, SUM(PONTOS) AS PONTOS FROM( SELECT mandante Equipes, 1 PARTIDA, IF(golmandante > golvisitante,1,0) VITORIA, IF(golmandante = golvisitante,1,0)  EMPATE, IF(golmandante < golvisitante,1,0) DERROTA, golmandante GP, golvisitante GC, golmandante-golvisitante DIF, CASE WHEN golmandante > golvisitante THEN 3 WHEN golmandante = golvisitante THEN 1 ELSE 0 END PONTOS FROM jogos UNION ALL SELECT visitante, 1, IF(golmandante < golvisitante,1,0),  IF(golmandante = golvisitante,1,0), IF(golmandante > golvisitante,1,0), golvisitante, golmandante, golvisitante-golmandante DIF, CASE WHEN golmandante < golvisitante THEN 3 WHEN golmandante = golvisitante THEN 1 ELSE 0 END FROM jogos) as tot JOIN Equipes t ON tot.Equipes=t.id GROUP BY Equipes ORDER BY SUM(PONTOS) DESC '
                this.conexao.query(sqlClassificacao, function(erro, rows) {
                    if (erro) throw erro;
                    console.table(rows)  })  }} 
 
        module.exports = new Tabelas