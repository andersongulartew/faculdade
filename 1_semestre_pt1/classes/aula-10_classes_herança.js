class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

 
       ligar(){
        if(this.ligado){
            console.log("já esta ligado")
            return;
        }
        this.ligado=true
       }
}

class SmartPhone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}

var s1 = new SmartPhone("samsung","preto","471")

console.log(s1)
s1.ligar();
s1.ligar();