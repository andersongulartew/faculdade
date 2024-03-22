# class Argentina():
#     def capital(self):
#         print("Buenos Aires é a capital da Argentina.")
#         print("O espanhol é a lingua oficial da argentina.")
#
# class Brasil():
#     def capital(self):
#         print("Brasilia é a capital do Brasil.")
#         print("O português é a lingua oficial do Brasil.")
#
#
# obj_arg = Angentina()
# obj_bra = Brasil()
# for pais in (obj_arg, obj_bra):
#     pais.capital()
#     pais.lingua_oficial()

##########################

class Veiculo:
    def rodar(self):
        print("Reduz o consumo de combsutivel")

class VeiculoEletrico(Veiculo):
    def rodar(self):
        super().rodar()
        print("Esse veiculo utiliza eletricidade")

veiculo_eletrico = VeiculoEletrico
veiculo_eletrico.rodar()
