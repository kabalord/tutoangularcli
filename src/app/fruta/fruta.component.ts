import { Component } from '@angular/core';

//decorador
@Component ({
	selector:'fruta', //etiqueta final donde se carga el componente
	templateUrl: './fruta.component.html',  
})
//creacion de la clase 
export class  FrutaComponent {
	public nombre_component = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public edad:number;
	public mayorDeEdad:boolean;
	public trabajos:Array<string> = ['Designer', 'Pharmacist', 'Developer', 'Griller'];
	//public trabajos:Array<any> = [1986,'Developer']; //si quiero ingresar diferentes tipos de datos en el array
	comodin:any;

	constructor(){
		this.nombre = 'Walter Roa Serrano';
		this.edad = 32;
		this.mayorDeEdad = true;
		this.comodin = 'Cualquier cosa';

	}

	ngOnInit() {
		this.holaMundo(this.nombre);

		//Variables y alcance

		var uno = 8;
		var dos = 15;

		if(uno === 8){
			let uno = 3;
			var dos = 88;
			console.log('DENTRO DEL IF ' + uno + ' ' + dos);
		}

			console.log('FUERA DEL IF ' + uno + ' ' + dos);
	}

	holaMundo(nombre){
		console.log('Hola!' + ' ' + nombre);
	}

}
