import {Component, Input} from '@angular/core';

@Component({
	selector: 'componente-hijo',
	template: `
		<strong>Este es el {{title}}</strong>
		<ul>
			<li>{{propiedad_uno}}</li>
			<li>{{propiedad_dos}}</li>
		</ul>

	`
})

export class hijoComponent {
	public title: String;

	@Input('texto1') propiedad_uno: String;
	@Input('texto2') propiedad_dos: String;

	constructor(){
		this.title = "componente Hijo";
	}

	ngOnInit(){
		console.log(this.propiedad_uno);
		console.log(this.propiedad_dos);
	}

}