import  { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service'



@Component({
	selector: 'coches', // etiqueta con la que identificaremos el componente
	templateUrl: './coches.component.html', //la ruta del archivo que utilizaremos como vista del componente
	providers:[PeticionesService]
})
// en esta clase es donde vamos a tener nuestras diferentes propiedades y metodos
export class CochesComponent{
	public coche: Coche;
	public coches:Array<Coche>;
	public articulos;

	constructor(
		private _peticionesService: PeticionesService

		){
		this.coche = new Coche("", "", "");
		this.coches = [
			new Coche("Seat Panda", "120", "Blanco"),
			new Coche("Renault Clio", "110", "Azul")

		];

	}

	ngOnInit(){
		this._peticionesService.getArticulos().subscribe(
			result => {
				this.articulos = result;

				if (!this.articulos) {
					console.log("Error en el servidor");
				}
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);
			}


			);
	}

	onSubmit(){
		this.coches.push(this.coche);
		this.coche = new Coche("", "", "");
	}

}

