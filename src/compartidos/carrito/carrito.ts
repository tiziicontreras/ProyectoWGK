import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../app/servicios/carrito.service';
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
    private carritoService: CarritoService
  ) { }


  ngOnInit() {
    this.ProductoCarrito =
      this.carritoService.obtenerProducto();
  }


  aumentar(id: number) {
    this.carritoService.aumentarCantidad(id);
  }


  disminuir(id: number) {
    this.carritoService.disminuirCantidad(id);
  }

    
  eliminar(id: number) {
    this.carritoService.eliminarProducto(id);
    this.ProductoCarrito =
      this.carritoService.obtenerProducto();
  }

  get precioTotal(): number {
  return this.carritoService.obtenerPrecioTotal();
  }
}
