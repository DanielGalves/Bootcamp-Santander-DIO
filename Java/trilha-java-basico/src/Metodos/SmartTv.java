package Metodos;

public class SmartTv {
	boolean ligada = false;
	int canal = 1;
	int volume = 25;

	public void ligar() {
		ligada = true;
		
	}
	
	public void desligar() {
		ligada = false;
	}
		
	public int selecionarCanal(int canal) {
		 this.canal = canal;		
		return canal;
	}
	
	public void aumentarCanal() {
		canal++;
	}
	
	public void diminuirCanal() {
		canal--;
	}
	
	public void aumentarVolume() {
		volume++;
		System.out.print("Aumentando ");
		System.out.print("o ");
		System.out.println("volume " + volume);
	}
	
	public void diminuirVolume() {
		volume--;
	}
	
	}

