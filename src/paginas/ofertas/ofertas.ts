import { Component } from '@angular/core';
import { carritoService } from '../../app/servicios/carritoService';
import { FavoritoService } from '../../app/servicios/favoritoService';
import { Producto } from '../../app/models/producto';

@Component({
  selector: 'app-ofertas',
  imports: [Ofertas],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {

constructor(private CarritoService: carritoService, private FavoritoService: FavoritoService){

  }

Productos: Producto[] = [
    {
      id: 1,
      nombre: "Nike Air Force 1 07",
      disponibilidad: true,
      descripcion: "Zapatillas de Moda para Hombre",
      cantidad: 1,
      precio: "$249.000",
      precioOferta: "$200.000",
      img: "assets/AirForce.webp"
    },
    {
      id: 2,
      nombre: "Air Jordan 1 Low SE",
      disponibilidad: true,
      descripcion: "Zapatillas Jordan para Hombre",
      precio: "$279.999",
      precioOferta: "",
      cantidad: 1,
      img: "assets/Jordan1Low.webp"
    },
    {
      id: 3,
      nombre: "Air Jordan 3 Retro",
      disponibilidad: true,
      descripcion: "Zapatillas Jordan para Hombre",
      precio: "$314.999",
      precioOferta: "",
      cantidad: 1,
      img: "assets/1531060-800-800 (1).webp"
    },
    {
      id: 4,
      nombre: "",
      disponibilidad: true,
      descripcion: "",
      precio: "",
      precioOferta: "",
      cantidad: 1,
      img: "assets/"
    },
    {
      id: 5,
      nombre: "",
      disponibilidad: true,
      descripcion: "",
      precio: "",
      precioOferta: "",
      cantidad: 1,
      img: ""
    },
    {
      id: 6,
      nombre: "",
      disponibilidad: true,
      descripcion: "",
      precio: "",
      precioOferta: "",
      cantidad: 1,
      img: ""
    }

    
    
  ]

   agregarCarrito(p: Producto){
    this.CarritoService.agregarProducto(p);
  }

   agregarFavoritos(p: Producto){
    this.FavoritoService.agregarProducto(p);
  }

}
