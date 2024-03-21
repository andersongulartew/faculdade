const numeros = [1,2,3,4,5];

try{
    const doubleNumbres = numeros.map((num)=>{
        if(typeof num !=='number'){
            throw new Error("o array só pode ter numeros")
        }
        return num * 2
    })

    console.log(doubleNumbres)

}catch(error){
    console.log("ocorreu uma exceção: " + error.message)
}

