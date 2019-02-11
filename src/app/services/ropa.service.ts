import {Injectable} from '@angular/core';

@Injectable() //no lleva ; porque no es una funcion es la llamada a un decorador para la clase que se va a definir
export class RopaService{

	public nombre_prenda = 'Pantalones vaqueros';
	public coleccion_ropa = ['Pantalones Blancos', 'Camiseta Roja'];

	prueba(nombre_prenda){
		return nombre_prenda;
	}

	addRopa(nombre_prenda:string):Array<string>{
		this.coleccion_ropa.push(nombre_prenda);

		return this.getRopa();
	}

	deleteRopa(index:number){
		this.coleccion_ropa.splice(index, 1);

		return this.getRopa();
	}

	getRopa():Array<string>{
		return this.coleccion_ropa;
	}

}