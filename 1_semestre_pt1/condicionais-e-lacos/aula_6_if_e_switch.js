// IF - ELSE IF --- if= se --- else= se nao
var pais = "brasil"

if (pais != "brasil") {
    console.log('voce é estrangeiro');
} else {
    console.log('voce é brasileiro');
} 


var idade = 50
if(idade <= 16){
    console.log("voce nao vota")
} else if (idade <= 17){
    console.log("voto opcional")
}else if (idade > 18 ) {console.log("voto obrigatorio")};


//== SWITCH
var dia = 4
switch(dia){
    case 1:
        console.log("domingo")
        break;

        case 2:
            console.log("segunda")
            break;

        case 3:
            console.log("terça")
            break;

        default:
            console.log("este dia não existe")

}



var valor = 3
switch(valor){
    case 1:
        console.log("vodga $10")
        break;

        case 2:
            console.log("Energético $25")
            break;

        case 3:
            console.log("Gin $15")
            break;

        default:
            console.log("opção inválida, por favor escolher entre as seguintes bebidas : CAFÉ, LEITE ou CHÁ")

}
