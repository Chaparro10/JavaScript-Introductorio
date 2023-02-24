
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


class Libro extends Producto{ //HERENCIA
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn=isbn;
    }

    formatoLibro(){
        return  `${super.formatoProducto()} , ISBN ${this.isbn}`;
    }
}
const producto2 = new Producto("Hola ", 2);
const Producto3 = new Producto("Hola ", 5);
const libro = new Libro("Bagon",12,12456789);

console.log(Producto3.retornaPrecio());
console.log(libro);