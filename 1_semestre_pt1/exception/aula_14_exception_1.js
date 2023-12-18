function divisao(a,b){
    if(b===0){
        throw new Error("divisão por zero não é permitida")
    }
    return a/b
}

try{
    const resultado = divisao(10,0);
    console.log("resultado :" + resultado)
}catch(error){
    console.log("ocorreu uma exceção: " + error.message)
}