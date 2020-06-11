



const customExpress = require('./config/customExpress') 
const conexao = require('./estrutura/conexao')
const Tabelas = require('./estrutura/tabelas')




conexao.connect(erro => {
    if (erro){
        console.log(erro)
    } else {
        
        console.log('Banco de dados conectado') 
        //Confirma conexão com o banco.
        
        Tabelas.init(conexao)
        const app = customExpress()
            
        app.listen(3000, () => console.log('Servidor rodando na porta 3000')) 
        //Confirma conexão com o servidor. 
    }
})

