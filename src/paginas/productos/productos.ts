import { Component } from '@angular/core';
import { Producto } from '../../app/models/producto';
import { carritoService } from '../../app/servicios/carritoService';
import { FavoritoService } from '../../app/servicios/favoritoService';


@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  constructor(private CarritoService: carritoService, private FavoritoService: FavoritoService){

  }
  

 


  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Nike Air Force 1 07",
      disponibilidad: true,
      descripcion: "Zapatillas de Moda para Hombre",
      cantidad: 1,
      precio: 249.000,

      img: "assets/AirForce.webp"
    },
    {
      id: 2,
      nombre: "Air Jordan 1 Low SE",
      disponibilidad: true,
      descripcion: "Zapatillas Jordan para Hombre",
      precio: 279999,
      cantidad: 1,
      img: "assets/Jordan1Low.webp"
    },
    {
      id: 3,
      nombre: "Air Jordan 3 Retro",
      disponibilidad: true,
      descripcion: "Zapatillas Jordan para Hombre",
      precio: 314999,
      cantidad: 1,
      img: "assets/1531060-800-800 (1).webp"
    },
    {
    id: 4,
      nombre: "Air Jordan 1 Retro High OG",
      disponibilidad: true,
      descripcion: "Zapatillas Jordan Unisex",
      precio: 499999,
      cantidad: 1,
      img: "assets/1824592-800-800.webp"
    },
    {
      id: 5,
      nombre: "Nike Dunk Low",
      disponibilidad: true,
      descripcion: "Zapatillas de Moda para Mujer",
      precio: 249.999,
      cantidad: 1,
      img: "assets/1594071-800-800.webp"
    },
    {
      id: 6,
      nombre: "San Antonio Spurs 2025/26 Statement Edition",
      disponibilidad: true,
      descripcion: "Musculosa Jordan para Hombre",
      precio: 199999,
      cantidad: 1,
      img: "assets/1730550-800-800.webp"
    },
    {
      id: 7,
      nombre: "Nike Air Max 95",
      disponibilidad: true,
      descripcion: "Zapatillas de Moda para Mujer",
      precio: 379999,
      cantidad: 1,
      img: "assets/1678688-800-800.webp"
    },
    {
      id: 8,
      nombre: "Nike Mind 001",
      disponibilidad: true,
      descripcion: "Sandalias tipo Mule para Mujer",
      precio: 199999,
      cantidad: 1,
      img: "assets/1824310-800-800.webp"
    }
    


    
    
  ]
  agregarCarrito(p: Producto){
    this.CarritoService.agregarProducto(p);
  }

   agregarFavoritos(p: Producto){
    this.FavoritoService.agregarProducto(p);
  }
}
