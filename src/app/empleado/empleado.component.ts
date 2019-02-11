import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component ({
	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
	public titulo = 'Componente Empleados:';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor(){
		this.empleado = new Empleado('Walter Roa Serrano', 32, 'Frontend Developer', false);
		this.trabajadores = [
			new Empleado('Walter Roa Serrano', 32, 'Frontend Developer', true),
			new Empleado('Gabriel Calderon', 35, 'Backend Developer', true),
			new Empleado('Jesus Manosalva', 36, 'VFX Designer', true),
			new Empleado('Jair Barrios', 35, 'UI-UX Designer', true),
		];

		this.trabajador_externo = false;
		this.color = 'blue';
		this.color_seleccionado = '#ccc';
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}

	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}

}