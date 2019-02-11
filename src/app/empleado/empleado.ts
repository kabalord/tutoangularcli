export class Empleado {

	/*
	//manera clasica de declarar una clase de forma clasica en cualquier lenguaje de programacion
	public nombre:string;
	public edad:number;

	constructor(nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}*/

	constructor(
		public nombre:string,
		public edad:number,
		public cargo:string,
		public contratado:boolean

		){}
}