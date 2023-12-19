 const pessoa = {
    nome:'joão',
    Idade: 25,
    profissao: "Desenvolvedor"
 }

 const pessoajson = JSON.stringify(pessoa)  // tranformar objeto no formado JSON

 //console.log(pessoa)

 //console.log(pessoajson)


 const pessoaobjeto = JSON.parse(pessoajson) // transformar objeto Json em JavaScript

 console.log(pessoaobjeto)
