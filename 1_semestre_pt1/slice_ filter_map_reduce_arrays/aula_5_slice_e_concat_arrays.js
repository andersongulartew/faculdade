// ---SLICE ----(EXCLUI APENAS AS POSIÇÃO INFORMADAS)///
var nome = ["eduardo","joana","walace","rosana"];
var nome1 = nome.slice(1,3) //  exclui a posição 1 e 3
console.log(nome1)
console.log(nome)


// --- CONCAT --- (JUNTA AS LISTAS)///
var funcionario = ["eduardo","joana","walace","rosana"]
var gerente = ["fabio","anderson"]
var geral = funcionario.concat(gerente)

console.log(geral)
