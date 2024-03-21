print('ola, Mundo !')

## tipo de variavel
x = 5
print(x,type(x))
# resultant:  5 <class 'int'>



print(help(int)) # Apresenta todos os atributos e métodos disponíveis para determinado tipo de dado.
print(dir(int))  # Apresenta a documentação relativa a determinado tipo de dado.


a = 0
for i in range(30):
    if a % 2 == 0:
        a += 1
        continue
    else:
        if a % 5 == 0:
            break
        else:
            a += 3
print(a)



nome = "Anderson Wodnoff"
print(nome)



valor = 10
type(valor)
# Resultado: <class 'int'>, valor inteiro

valor = 'a'
type(valor)
# Resultado: <class 'str'>, mudo de inteiro para string
