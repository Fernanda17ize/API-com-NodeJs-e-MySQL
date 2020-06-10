const mysql = require('mysql')

//Conexão com o WorkBench

const conexao = mysql.createConnection({

        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'admin',
        database: 'campeonato-futebol'
    } ) 
 
module.exports = conexao