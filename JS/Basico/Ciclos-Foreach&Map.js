const carrito =[
    {nombre:'Monitor', precio: 20},
    {nombre:'laptop', precio:10}
];


//FOReach 
/*EN OTROS LENGUAJES c# foreach(producto elemento in productos),
 java  for(String cadena:lista) {System.out.println(cadena);}*/
 
/**Usar-.Imprimir en consola o mostrar informacion en html */
carrito.forEach(function(producto){//OPCION 1
    console.log(producto.nombre);
})

carrito.forEach(producto => console.log(producto.nombre));//OPCION 2 ARROE FUNCTION

//MAP
/**PARA CREAR UN NUEVO ARREGLO */
carrito.map(function(producto){//OPCION 1
    console.log(producto.nombre);
})

carrito.map(producto => console.log(producto.nombre)); 

const arregloNuevo=carrito.map(producto => (producto.nombre)); 


