# implementar um programa para criar,
# uma classe veiculo com atributos de  velocidade e quilometros.

class Veiculo:
    def __init__(self, nome, velocidade_max, quilometro_litro):
        self.nome = nome
        self.velocidade_max = velocidade_max
        self.quilometro_litro = quilometro_litro

    def capacidade_assento(self, capacidade):
        print(f'A capacidade maxima de assentos do veiculo {self.nome} é {capacidade}')

    def toStr(self):
        print(f'nome = {self.nome}')
        print(f'velocidade_max = {self.velocidade_max}')
        print(f'quilometros percorrido por litros = {self.quilometro_litro}')

modelo_carro = Veiculo("Fusca", 180, 10)
modelo_carro.toStr()

#crie uma classe filha "Onibus" que herdara todas as variaveis e metodos da classe "veiculo"

#modificar a classe filha"onibus", de modo que,
#ela forneca a quantidade de assento.
#alem disso, o valor desse parametro deve ser 70

class Onibus(Veiculo):
    def capacidade_assento(self, capacidade = 70):
        return super().capacidade_assento(capacidade = 70)

onibus = Onibus("Scania", 120, 8)
onibus.toStr()
onibus.capacidade_assento()


