class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("olá " + this.nome)
    }
    get nomeCompleto(){
        console.log("olá " + this.nome + " " + this.sobrenome)
    }
}

p1 = new Pessoa("fabio","silva");
p1.falar();
p1.nomeCompleto




p2 = new Funcionario("fabio", "18" , "analista")
p2.Funcionario

