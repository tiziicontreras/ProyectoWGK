import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Producto } from "../models/producto";

@Injectable({ providedIn: "root" })
export class CarritoService {

  private apiUrl = "http://localhost/api_proyecto/public/carrito";

  // Carrito en memoria
  private items: Producto[] = [];

  constructor(private http: HttpClient, private auth: AuthService) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.auth.getToken()}`
    });
  }

  // ---------- Métodos de la API ----------

  ver(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers() });
  }

  agregar(idProducto: number, cantidad: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/agregar`,
      { id_producto: idProducto, cantidad },
      { headers: this.headers() }
    );
  }

  eliminar(idProducto: number): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/eliminar/${idProducto}`,
      { headers: this.headers() }
    );
  }

  vaciar(): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/vaciar`,
      { headers: this.headers() }
    );
  }

  // ---------- Carrito en memoria ----------

  agregarProducto(p: Producto) {
    const existente = this.items.find(i => i.id === p.id);
    if (existente) {
      existente.cantidad++;
    } else {
      this.items.push({ ...p, cantidad: 1 });
    }
  }

  obtenerProducto(): Producto[] {
    return this.items;
  }

  aumentarCantidad(id: number) {
    const item = this.items.find(i => i.id === id);
    if (item) item.cantidad++;
  }

  disminuirCantidad(id: number) {
    const item = this.items.find(i => i.id === id);
    if (item && item.cantidad > 1) item.cantidad--;
  }

  eliminarProducto(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  }

  obtenerPrecioTotal(): number {
    return this.items.reduce((total, i) => total + i.precio * i.cantidad, 0);
  }

  obtenerCantidadTotal(): number {
    return this.items.reduce((total, i) => total + i.cantidad, 0);
  }
}