# herança
class ClasseSomaMultiplica:
    def __init__(self, a, b):
        self.a = a
        self.b = b
    def soma(self):
        return self.a + self.b
    def multiplica(self):
        return self.a * self.b
class Derivada(ClasseSomaMultiplica):
    def subtrair(self):
        return self.a - self.b

    def dividir(self):  # Correção: "dividir" com letra minúscula
        return self.a / self.b

d = Derivada(10, 20)
print(f'A soma de 10 e 20 é: {d.soma()}')  #  chamando o método "soma"
print(issubclass(Derivada, ClasseSomaMultiplica))  # Chamando issubclass fora do bloco de classes