import { Component, OnInit } from '@angular/core';
import { carritoService } from '../../app/servicios/carritoService';
import { Producto } from '../../app/models/producto';




@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})


export class Carrito implements OnInit {

  ProductoCarrito: Producto[] = [];

  constructor(
    private CarritoService: carritoService
  ) { }


  ngOnInit() {
    this.ProductoCarrito =
      this.CarritoService.obtenerProducto();
  }


  aumentar(id: number) {
    this.CarritoService.aumentarCantidad(id);
  }


  disminuir(id: number) {
    this.CarritoService.disminuirCantidad(id);
  }

    
  eliminar(id: number) {
    this.CarritoService.eliminarProducto(id);
    this.ProductoCarrito =
      this.CarritoService.obtenerProducto();
  }
}
