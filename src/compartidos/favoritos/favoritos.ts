import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../app/servicios/favoritoService';
import { CarritoService } from '../../app/servicios/carrito.service';
import { Producto } from '../../app/models/producto';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {
  ProductoFavoritos: Producto[] = [];

  constructor(
    private FavoritoService: FavoritoService,
     private carritoService: CarritoService
  ) { }


  ngOnInit() {
    this.ProductoFavoritos =
      this.FavoritoService.obtenerProducto();
  }


  aumentar(id: number) {
    this.FavoritoService.aumentarCantidad(id);
  }


  disminuir(id: number) {
    this.FavoritoService.disminuirCantidad(id);
  }


  eliminar(id: number) {
    this.FavoritoService.eliminarProducto(id);
    this.ProductoFavoritos =
      this.FavoritoService.obtenerProducto();
  }

   agregarCarrito(p: Producto){
    this.carritoService.agregarProducto(p);
  }

   agregarFavoritos(p: Producto){
    this.FavoritoService.agregarProducto(p);
  }

}
