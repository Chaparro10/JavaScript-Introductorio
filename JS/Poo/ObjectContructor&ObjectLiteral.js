//POO

/**OBJECT LITERAL */
const producto = {
    nombre: "Tablet",
    precio: 200
}

//Object Constructor

function Producto(nombre,precio,Disponible){
 this.nombre=nombre;
 this.precio=precio;
 this.Disponible=Disponible;
}

const Producto2 = new Producto('Monitor',500,false);
const Producto3 = new Producto('Monitor2',20,true);
const Producto4 = new Producto('Monitor3',500,false);
const Producto5 = new Producto('Monitor4',20,false);
console.log(Producto2);
console.log(Producto3);
console.log(Producto4);
console.log(Producto5);

