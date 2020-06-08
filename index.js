



const customExpress = require('./config/customExpress') 
const conexao = require('./estrutura/conexao')
const Tabelas = require('./estrutura/tabelas')



conexao.connect(erro => {
    if (erro){
        console.log(erro)
    } else {
        
        console.log('banco de dados conectado') 
        //Primeiro confirma se o banco esta conectado.
        

        Tabelas.init(conexao)

        const app = customExpress()
            
        app.listen(3000, () => console.log('servidor rodando na porta 3000')) 
        //Segundo confirma se o servidor esta conectado.
    }
})

