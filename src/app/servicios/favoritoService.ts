import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {

   Favoritos: Producto[] = [];
  
    agregarProducto(p: Producto) {
      const existente = this.Favoritos.find(prod => prod.id === p.id);
      if (existente) {
        p.cantidad++
      } else {
        this.Favoritos.push(p);
      }
  
    }
  
    obtenerProducto() {
      return this.Favoritos;
    }
  
    aumentarCantidad(id: number) {
      const producto = this.Favoritos.find(p => p.id === id);
  
      if (producto) {
        producto.cantidad++;
      }
    }
  
    disminuirCantidad(id: number) {
      const producto = this.Favoritos.find(p => p.id === id);
  
      if (producto && producto.cantidad > 1) {
        producto.cantidad--;
      }
    }
  
    eliminarProducto(id: number) {
      this.Favoritos = this.Favoritos.filter(p => p.id !== id);
    }

}
