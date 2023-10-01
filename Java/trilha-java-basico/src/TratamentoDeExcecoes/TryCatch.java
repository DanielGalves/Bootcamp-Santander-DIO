package TratamentoDeExcecoes;

import java.util.InputMismatchException;
import java.util.Locale;
import java.util.Scanner;

public class TryCatch {
	public static void main(String [] args) {
		
		try {
		Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
		
		System.out.println("Digite seu nome: ");
		String nome = scanner.next();
		
		System.out.println("Digite o sobrenome: ");
		String sobreNome = scanner.next();
		
		System.out.println("Informe a idade: ");
		int idade = scanner.nextInt();
		
		System.out.println("Informe a altura: ");
		double altura = scanner.nextDouble();
		
		
		System.out.println("Nome: " + nome);
		System.out.println("Sobrenome: " + sobreNome);
		System.out.println("Idade: " + idade);
		System.out.println("Altura: " + altura);
		}
		catch(InputMismatchException e) {
			
			System.out.println("Os compos Idade e Altura precisam ser numericos");
			
		}
		
		
	}

}
