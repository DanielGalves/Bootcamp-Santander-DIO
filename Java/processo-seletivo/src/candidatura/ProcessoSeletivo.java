package candidatura;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {
	public static void main(String [] args) {
		String [] candidatos = {"FELIPE","MARCIA","PAULO","JULIA","AUGUSTO"};
		
		imprimirSelecionados(candidatos);
						
	}
	
	static void ligandoParaCandidatos() {
		
	}
	
	//Metodo auxiliar 
	static boolean atender() {
		return new Random().nextInt(3)==1;
	}
	
	static void imprimirSelecionados(String[] candidatos) {
		//String [] candidatos = {"FELIPE","MARCIA","PAULO","JULIA","AUGUSTO"};
		
		System.out.println("Imprimindo lista de candidatos selecionados:");
		
		for (int i = 0;i < candidatos.length; i++ ) {
			System.out.println("O candidato nº " + (i+1) + " de nome : " + candidatos[i] + " foi selecionado");
		}
		
		System.out.println("Forma abreviado de realizar a impressão utilizando o For Each");
		
		for(String candidato : candidatos) {
			System.out.println("O candidato selecionado foi " + candidato);
		}
		
		
	}
	
	
	static void selecaoCandidatos() {
		String [] candidatos = {"FELIPE","MARCIA","PAULO","JULIA","AUGUSTO",
								"MONICA","FABRICIO","MIRELA","DANIELA",	"JONAS"};
		
		int candidatosSelecionados = 0;
		int candidatosAtual = 0;
		double salarioBase = 2000.00;
		while(candidatosSelecionados < 5 && candidatosAtual < candidatos.length ) {
			String candidato = candidatos[candidatosAtual];
			double salarioPretendido = valorPretendido();
			
			//System.out.println("O candidato " + candidato + " Solicitou este valor de Salario " + salarioPretendido);
			if(salarioBase >= salarioPretendido) {
				System.out.println("O candidato " + candidato + " foi selecionado para a vaga");
				candidatosAtual++;
				candidatosSelecionados++;
			}
		}		
	
	}
	
	
	static double  valorPretendido() {
		return ThreadLocalRandom.current().nextDouble(1800, 2200);
	}
	
	static void analisarCandidato(double salarioPretendido) {
		double salarioBase = 2000.00;
		if (salarioBase > salarioPretendido) {
			System.out.println("LIGAR PARA O CANDIDATO");
		} else if (salarioBase == salarioPretendido) {
			System.out.println("LIGAR PARA O CANDIDATO COM UMA CONTRA PROPOSTA");
		}else {
		 	System.out.println("AGUARDANDO DEMAIS CANDIDATOS!!!");
		}
	}

}
