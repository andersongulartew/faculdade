function processName(nome,callback){
    if(typeof nome !== 'string'){
        callback(new Error('o nome deve ser uma string'))
        return;
    }
    if (nome.length == 0){
        callback(new Error(" o nome não pode estar vazio"))
        return;
    }

    callback(null,"nome processado com sucesso")

}

processName("marcelo",(error,result)=>{
    if(error){
        console.log("occorreu problema" , error.message)
    } else{
        console.log(result)
    }
})