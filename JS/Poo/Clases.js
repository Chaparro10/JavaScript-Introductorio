//CLASES

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatoProducto() {
        
        return `El nombre ${this.nombre} , Precio: ${this.precio}`;
    }

    retornaPrecio(){
            return `El precio es: ${this.precio}`;  
    }
}
const producto2 = new Producto("Hola ", 2);
const Producto3 = new Producto("Hola ", 5);;

console.log(Producto3.retornaPrecio());
