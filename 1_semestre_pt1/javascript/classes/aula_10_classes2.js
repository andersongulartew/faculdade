class ContaCliente{
    constructor(numeroConta,saldo,debito,credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    calcularsaldoAtutal(){
        return this.saldo - this.debito + this.credito
    }

    verificarSaldo(){
        const saldoAtual= this.calcularsaldoAtutal()
        if(saldoAtual>=0){
            alert("saldo positivo R$ " + saldoAtual)
        }else{
            alert("saldo negativo R$ " + saldoAtual)
        }
    }
}

let numeroConta = prompt("digite o numero da conta do cliente")
let saldo = parseFloat(prompt ("digite o saldo do cliente"))
let debito = parseFloat(prompt ("digite o debito do cliente"))
let credito = parseFloat(prompt ("digite o credito do cliente"))

let conta = new ContaCliente(numeroConta,saldo,debito,credito)
conta.verificarSaldo();
