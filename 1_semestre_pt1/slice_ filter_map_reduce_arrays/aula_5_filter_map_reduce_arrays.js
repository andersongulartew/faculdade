// -- FILTER -- //

// metodo 1
var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

// metodo 2
var numerosFiltrados = numeros.filter(
function (valor){
    return valor > 2;
}
);
console.log(numerosFiltrados);

// metodo 3
function buscarValores(valor){
    return valor > 6;
}

var numerosEncontrados = numeros.filter(buscarValores)
console.log(numerosEncontrados)

// dilter com dados de nomes

var pessoas = [
    {nome: "anderson", idade: 30},
    {nome: "joao", idade: 20},
    {nome: "pedro", idade: 40},
    {nome: "luis", idade: 25}
]

var pessoasGeral = pessoas.filter(
    function (valor){
       return valor .nome.length >5
    }
);
console.log (pessoasGeral)

///--- MAP --- ///

var gerais = [1,2,3,4,5,6,7,8,9,10];
var gerais2 = gerais.map(function(valor){
    return valor * 2;
});
console.log(gerais2)


//--- REDUCE ---(REDUCIR UM ARRAY EM UM UNICO VALOR, EXEMPLO FAZER SOMA) ///

//soma com FOR
var num123 = [1,2,3,4,5,6,7,8,9,10];
var total = 0;
for (let index = 0; index < num123.length; index++) {
    total+= num123[index];
    
};
console.log(total);

//soma com REDUCE
var tot = num123.reduce(function(total,num123){
    return total + num123;
}, 0);


