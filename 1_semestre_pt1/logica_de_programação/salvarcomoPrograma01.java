// salvar como Programa01.java

Class Programa01
{
	public static void main (String entrada[])
	{
	// declaração de variaveis
	int NumInt;
	double NumReal,soma;
	char Caracter;

	// entrada de dados
	NumInt = Integer.parseInt(entrada[0]);
	NumReal = double.parseDouble(entrada[1]);
	Caracter = (entrada[2]).charAt(0);

	// processamento
	soma = (double)NumInt + NumReal;

	//SAIDA DE DADOS
	System.out.println((double) NumInt + "+" + NumReal + "=" + soma "sinal" + caracter);

	System.exit(0)	