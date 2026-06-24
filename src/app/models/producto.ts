export interface Producto {
   id: number
   nombre: string
   disponibilidad: boolean
   descripcion: string
   cantidad: number
   precio: number
   precioOferta?: number
   img: string
}