
//módulos de angular que tienen que ver con el routing
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//Importar componentes que vamos a usar

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


const appRoutes: Routes = [

	{path: '', component: EmpleadoComponent}, //Ruta inicial cuando la url no tenga nada
	{path: 'empleado', component: EmpleadoComponent}, // Ruta para component Empleado
	{path: 'fruta', component: FrutaComponent }, // Ruta componente fruta
	{path: 'pagina-principal', component: HomeComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: 'contacto/:page', component: ContactoComponent},
	{path: 'coches', component: CochesComponent},
	{path: 'plantillas', component: PlantillasComponent},
	{path: '**', component: EmpleadoComponent} //Ruta por defecto, cuando se produzca un error y no exista el component que le estamos indicando en la url que cargue una ruta por defecto
];

export const appRoutingProviders: any[] = []; // Esto es un procedimiento que necesita angular para poder cargar el provider de la ruta y que todo funcione


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // Con este metodo le vamos a decir que array de rutas tiene que cargar  para  que coja todas las rutas que le estamos indicando las introduzca y las inyecte en la configuracion del framework y funcione todo