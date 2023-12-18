const minhaPromise = new Promise((resolver,reject) =>{

    const sucesso = false
    if(sucesso){
        resolver("Deu bom!!!")
    }else{
        reject("Ocorreu um problema")
    }

})

minhaPromise
.then ((resultado)=>{
    console.log("foi sucesso : " + resultado)
})

.catch ((erro)=>{
    console.log("Deu ruim : " + erro)
})