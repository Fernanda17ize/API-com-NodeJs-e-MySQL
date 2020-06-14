# nodejs-api-projeto

api tabela de campeonato futebol com mysql

# DOCUMENTAÇÃO DA API

. Foi escrito em PT-BR. Written in pt-BR. 


. API testada com POSTMAN. 


# LOGIN 

. LOGIN E SENHA PARA ACESSAR AS PÁGINAS: 
(usuarios.json)

    // email: futebol@email
    
    // senha: senha
    
    . Será gerado um ToKen para navegar pelas demais rotas: classificação, campeonato. 
    

# BANCO DE DADOS 

. A conexão foi feita com SQL WorkBench (estrutura/conexão).

        host: 'localhost',
        
        port: 3306,
        
        user: 'root',
        
        password: 'admin',
        
        database: 'campeonato-futebol'
        

# EQUIPES CADASTRADAS

. Já tem 4 times cadastrados que são inseridos no banco automaticamente. 

    1. Grêmio,
    
    2. Fortaleza
    
    3. Avaí
    
    4. Atlético
    

# CADASTRO DAS PARTIDAS 

. É possível cadastrar os times, jogos, gols na tabela "/CAMPEONATO". 

    . Tabela de partidas recebe e exibe:
    
    index,
    
    id,
    
    clube mandante (mandante),
    
    gols do time mandante (golmandante),
    
    clube visitante (visitante),
    
    golvisitante (gols do time visitante).
    

. É possível apenas CADASTRAR - ainda //não é possível ALTERAR OU DELETAR//. 
    

*** CLASSIFICAÇÃO ***

. O SELECT do SQL mostra o resultado da classificação em "/CLASSIFICACAO".

    .A tabela de classificação exibe:
    
    Index, 
    
    Nome da Equipe,
    
    Partidas disputadas,
    
    Vitória,
    
    Empate,
    
    Derrota,
    
    GP (Gol Pró),
    
    GC (Gol Contra),
    
    Dif (Diferença de Gols),
    
    Pontuação final. 
    

# Métodos


***CONTROLE***

. O controle das rotas está organizado em "/controladores/controle-rotas.js"


------------------------------------
LOGIN

Método: POST

URL: /LOGIN

PARÂMETROS:

email: futebol@email

senha: senha


-------------------------------------
Incluir partidas do campeonato.

Método: POST/GET

URL: /campeonato 

Parâmetros:

id 

"mandante" : int,

"golmandante" : tinyint,

"visitante" : int,

"golvisitante" : tinyint.



-------------------------------------
Verifica Tabela de Classificação.

Método: GET 

URL: /classificacao 

Parâmetros:

id 

"Equipes" : Nome do clube

"Partida" : Quantidade de partidas

"Vitoria" : Quantidade de vitórias

"Empate" : Quantidade de empates

"Derrota" : Quantidade de derrotas

"Gol Pró" : Gols pró

"Gol Contra" : Gols contra

"Saldo de Gols" : Saldo de Gols

"Pontuação Final" : Classificação final.
