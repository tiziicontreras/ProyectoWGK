import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class carritoService {
  Carritos: Producto[] = [];

  agregarProducto(p: Producto) {
    const existente = this.Carritos.find(prod => prod.id === p.id);
    if (existente) {
      p.cantidad++
    } else {
      this.Carritos.push(p);
    }

  }

  obtenerProducto() {
    return this.Carritos;
  }

  aumentarCantidad(id: number) {
    const producto = this.Carritos.find(p => p.id === id);

    if (producto) {
      producto.cantidad++;
    }
  }

  disminuirCantidad(id: number) {
    const producto = this.Carritos.find(p => p.id === id);

    if (producto && producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  eliminarProducto(id: number) {
    this.Carritos = this.Carritos.filter(p => p.id !== id);
  }

  obtenerCantidadTotal(): number {
  return this.Carritos.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

}

obtenerPrecioTotal(): number {
  return this.Carritos.reduce(
    (total, producto) => total + (producto.precio * producto.cantidad),
    0
  );
}

}