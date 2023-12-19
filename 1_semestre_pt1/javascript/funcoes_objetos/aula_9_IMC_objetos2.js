function criarFuncionario(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        altura,
        peso,
        calculoImc(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if(indice<18.5){
                console.log("abaixo do peso")
            }else if(indice >=18.5 && indice <24.9){
                console.log("peso normal")
            }else if(indice >=25 && indice <29.9){
                console.log("acima do peso")
            }else if(indice >=30 && indice < 34.9){
                console.log("obesidade")
            }else if(indice >=35 && indice <=39.9){
                console.log("obesidade 2")
            } else if(indice >=40){
                console.log("obesidade")
            }
        }
    }
}

const p1 = criarFuncionario("marcelo","barros",1.75,75)

p1.calculoImc()