class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome,
        this.idade = idade;
        this.cargo = cargo

    }
seApresentar(){
    console.log("olá meu nome é " + this.nome +" " + "tenho , " + this.idade + " e trabaho no cargo de " + this.cargo)
}
trabalhar(){
    console.log("meu trabaho é analisar os dos de sistemas")
}
}
p1 = new Funcionario("fabio",25,"analista")


class Gerente extends Funcionario{
    constructor(nome , idade , cargo,departamento){
        super(nome , idade , cargo);
        this.departamento = departamento
    }
    gerenciar(){
        
    }
}

g1 = new Gerente("fabio",25,"analista","Financeiro")



class desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,javascript){
      super(nome,idade,cargo);
      this.javascript = javascript

    }
    programar(){

    }
}
d1 = new desenvolvedor("fabio",25,"analista","JavaScript")
