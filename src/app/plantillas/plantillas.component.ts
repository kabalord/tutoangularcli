import { Component } from '@angular/core';

@Component({
	selector: 'plantillas',
	templateUrl:'./plantillas.component.html',
})
export class PlantillasComponent {
	public titulo;
	public administrador; 

	public dato_externo = "Walter Roa Serrano";
	public identity = {
		id:1,
		web: 'http://fx.timemachinevr.co/personalPortfolioFrances/',
		tematica: 'Desarrollo Web'
	};

	constructor(){
		this.titulo = "Plantillas ngTemplate en Angular";
		this.administrador = true;
	}

	cambiar(value){
		this.administrador = value;
	}
}

