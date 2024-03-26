# classe Salario
# class Salario:
#     def _init_(self,base,bonus):
#         self.base = base
#         self.bonus = bonus

#     def salario_anual(self):
#         return(self.base*12)+self.bonus

# #classe empregado
# class Empregado:
#     def Empregado(self,nome,idade,salario):
#         self.nome = nome
#         self.idade = idade
#         self.salario_agregado = salario #agregacao
#     def salario_total(self):
#         return self.salario_agregado.salario_anual()

#     salario = Salario(10000, 700)
#     emp = Empregado ('Musashi', 46, salario)
#     print(emp.salario_total())

    #########################################

from datetime import date
class Pessoa:
    def __init__(self,nome,idade):
        self.nome = nome
        self.idade = idade

    @classmethod
    def apartirAnoNascimento(cls,nome,ano):
        return cls(nome,date.today().year - ano)

    @staticmethod
    def ehMaiorIdade(idade):
        return idade >= 18

pessoa1 = Pessoa('maria',26)
pessoa2 = Pessoa.apartirAnoNascimento('ana', 2006)

print(pessoa1.idade)
print(pessoa2.idade)

print(Pessoa.ehMaiorIdade(17))


