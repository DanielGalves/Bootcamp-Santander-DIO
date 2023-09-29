package Metodos;

public class Usuario {
	public static void main(String [] args) throws Exception  {
		
		SmartTv smartTv = new SmartTv();
		
		System.out.println("TV Ligada? " + smartTv.ligada);
		System.out.println("Canal Atual? " + smartTv.canal);
		System.out.println("Volume Atual? " + smartTv.volume);
		
		smartTv.ligar();
		
		System.out.println("TV Ligada? " + smartTv.ligada);
		
		smartTv.selecionarCanal(10);
		System.out.println("Canal selecionado? " + smartTv.canal);
		
		smartTv.aumentarVolume();
		System.out.println("Volume atual? " + smartTv.volume);
		
		smartTv.diminuirVolume();
		System.out.println("Volume atual? " + smartTv.volume);
		
		smartTv.aumentarCanal();
		System.out.println("Canal Atual? " + smartTv.canal);
		
		smartTv.diminuirCanal();
		System.out.println("Canal Atual? " + smartTv.canal);
		
		
		
		
		
	}
}
