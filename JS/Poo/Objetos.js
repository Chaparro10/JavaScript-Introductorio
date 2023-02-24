//OBJETOS
"use strict";//Corre a JS en modo estricto
const producto={
    nombre:"TV",
    precio:20,
    disponible:true
}

//MODIFICAR OBJETOS
producto.imagen="imagen.jpg";

//ELIMINAR PROPIEDADES
delete producto.disponible;

//DESTRUCTURING DE OBJETOS
const {precio,nombre}=producto;
console.log(precio);


//METHODS
Object.seal(producto);//Permite modificar pero no agregar o eliminar
Object.freeze(producto);//No permite Nada

//UNION DE 2 OBJETOS
const medida={
 peso:"1",
 kilo:"1kg"
}

const nuevoObjeto={...producto,...medida};

