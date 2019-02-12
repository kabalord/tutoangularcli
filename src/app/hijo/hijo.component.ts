import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'componente-hijo',
	template: `
		<strong>Este es el {{title}}</strong>
		<ul>
			<li>{{propiedad_uno}}</li>
			<li>{{propiedad_dos}}</li>
		</ul>
		<button (click)="enviar()">Enviar datos al componente padre</button>
	`
})

export class hijoComponent {
	public title: String;

	@Input('texto1') propiedad_uno: String;
	@Input('texto2') propiedad_dos: String;

	@Output() desde_el_hijo = new EventEmitter();

	constructor(){
		this.title = "componente Hijo";
	}

	ngOnInit(){
		console.log(this.propiedad_uno);
		console.log(this.propiedad_dos);
		this.enviar();
	}

	enviar(){
		this.desde_el_hijo.emit({
			nombre: 'Walter Roa Serrano utilizando Output',
			web: 'http://fx.timemachinevr.co/personalPortfolioFrances/',
			twitter: '@kabalord'

		});
	}


}