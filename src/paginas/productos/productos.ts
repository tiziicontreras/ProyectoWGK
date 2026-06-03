import { Component } from '@angular/core';
import { Producto } from '../../app/models/producto';
import { carritoService } from '../../app/servicios/carritoService';

@Component({
  selector: 'app-productos',
  imports: [Productos],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  constructor(private CarritoService: carritoService) { }

  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Nike Air Force 1 07",
      disponibilidad: true,
      descripcion: "Zapatillas de Moda para Hombre",
      cantidad: 1,
      precio: "$249.000",

      img: "assets/AirForce.webp"
    },
    {
      id: 2,
      nombre: "Air Jordan 1 Low SE",
      disponibilidad: true,
      descripcion: "Zapatillas Jordan para Hombre",
      precio: "$279.999",
      cantidad: 1,
      img: "assets/Jordan1Low.webp"
    },
    {
      id: 3,
      nombre: "Air Jordan 3 Retro",
      disponibilidad: true,
      descripcion: "Zapatillas Jordan para Hombre",
      precio: "$314.999",
      cantidad: 1,
      img: "assets/1531060-800-800 (1).webp"
    },
    {
      id: 4,
      nombre: "",
      disponibilidad: true,
      descripcion: "",
      precio: "",
      cantidad: 1,
      img: "assets/"
    },
    {
      id: 5,
      nombre: "",
      disponibilidad: true,
      descripcion: "",
      precio: "",
      cantidad: 1,
      img: ""
    },
    {
      id: 6,
      nombre: "",
      disponibilidad: true,
      descripcion: "",
      precio: "",
      cantidad: 1,
      img: ""
    }

    
    
  ]
  agregarCarrito(p: Producto){
    this.CarritoService.agregarProducto(p);
  }
}
