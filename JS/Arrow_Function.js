//ARROW FUNCTIONS
const sumar=(n1,n2)=>{ //OPCION 1
    console.log(n1+n2);
}
sumar(10,5);

const aprendiendo =(tecnologia)=>console.log(`Aprendiendo ${tecnologia}`)//OPCION2
aprendiendo('Javascript');



//***********************PRACTICANDO EL ARROW FUNCTION **********/
//ARREGLO DE OBJETOS
const carrito =[
    {nombre:'Monitor', precio: 20},
    {nombre:'laptop', precio:10}
];


//SOME ARREGLO DE OBJETOS
resultado = carrito.some( producto=> producto.nombre=='laptop');//BUSCA LA LAPTOP EN EL ARREGLO 


//REDUCE(PARA SUMAR LOS PRECIOS DEL ARREGLO)
resultado=carrito.reduce((total,precio)=> total + producto.precio, 0);

//OTRA FORMA DE ESCRIBIR LO MISMO
resultado=carrito.reduce((total,producto) => total + producto.precio,0);

//FILTER 

resultado=carrito.filter(function(producto){//OPCION NORNAL
    return producto.precio > 500
});