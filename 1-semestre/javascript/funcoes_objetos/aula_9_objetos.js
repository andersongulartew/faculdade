// 1ª FORMA DE CRIAR OBJETO

const pessoa = {
    nome:"lucas",
    sobrenome:"barros"
}

console.log(pessoa["sobrenome"])



// 2ª FORMA DE CRIAR OBJETO

const funcionario = new Object();
funcionario.nome ="karen"
funcionario.sobrenome="silva"

console.log(funcionario.nome)


// 3ª FORMA DE CRIAR OBJETO

function criarPessoa(nome,sobrenome){
    return{nome,sobrenome}
}
const p1 = criarPessoa("anderson","silva")
const p2 = criarPessoa("andre","matos")

console.log(p1)
console.log(p2)