///------ SPLICE-----///

var ar = [-5,10,15,20,-3,89];
ar.splice(3) // apaga todos os elemento após a ordem sinalizada, (3)= apagou todos pós o terceiro elemento
console.log(ar)


var ar2 = [1,2,3,4,5,6,7];
ar2.splice(1,1) // splice tira a posição da arrays, exemplo elemento 2 da array(2=ordem do elemento,1=quantidade de elementos)
console.log(ar2)

var ar3 = [10,11,12,13,14,15,16,17,18,19,20]
ar3.splice(2,3) //  apaga o elemento na posição 2 e juntos os tres proximos Ex:12,13,14 foram apagados
console.log(ar3)


var nomes = ["maria","joao","lucas","pedro"]
var novos = nomes.splice(1,2,"luiz" , "ronaldo") // substitui o nome do array por LUIS posição exemplo: 1,1 pelo nome entre aspas
console.log(nomes)

var pais = ["brasil","argentina","colombia"]
pais.unshift("uruguai") // unshif = usado para acrescentar um elemento no arrays
console.log(pais)



