const app = require("./src/app") //chamando o arquivo app

const PORT = 4040 // porta

//inicia o servidor
app.listen(PORT, ()=>{
    console.log(`ALÊ DOÇURA? TO NA PORTA ${PORT}`)
})
