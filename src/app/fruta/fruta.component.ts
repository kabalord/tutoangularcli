import { Component } from '@angular/core';

//decorador
@Component ({
	selector:'fruta', //etiqueta final donde se carga el componente
	templateUrl: './fruta.component.html',  
})
//creacion de la clase 
export class  FrutaComponent {
	public nombre_component = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia'
}

