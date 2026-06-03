import { Routes } from '@angular/router';
import { Favoritos } from '../compartidos/favoritos/favoritos';
import { Contacto } from '../paginas/contacto/contacto';
import { Ofertas } from '../paginas/ofertas/ofertas';
import { Productos } from '../paginas/productos/productos';
import { Inicio } from '../paginas/inicio/inicio';
import { InicioSesion } from '../auth/inicio-sesion/inicio-sesion';
import { Registro } from '../auth/registro/registro';
import { Carrito } from '../compartidos/carrito/carrito';

export const routes: Routes = [
    { path: '', redirectTo: 'Inicio', pathMatch: 'full'},
    { path: 'Inicio', component:Inicio},
    { path: 'InicioSesion', component: InicioSesion},
    { path: 'Registro', component: Registro},
    { path: 'Carrito', component: Carrito},
    { path: 'Favoritos', component: Favoritos},
    { path: 'Contacto', component: Contacto},
    { path: 'Ofertas', component: Ofertas},
    { path: 'Productos', component: Productos},
    { path: '**', redirectTo: 'home'}
];
