//ARREGLOS O ARRAYS
const numeros =[10,20,30,50,20];
console.table(numeros);


const meses =['ENERO','FEBRERO','MARZO'];
console.table(meses);

console.log(meses.length);

meses.forEach(function(mes){
    console.log(mes);
})


//METODOS PARA LOS ARRAYS
numeros.push(60);//AGREGA AL FINAL DEL ARREGLO
numeros.unshift(-10);//AGREGA AL INICIO


numeros.pop();//ELIMINA EL ULTIMO ELEMENTO
numeros.shift();//ELIMINA EL PRIMER ELEMENTO

//REST OPERATOR O SPREAD SEPARATOR

const nuevoArreglo=[...meses,'junio'];
console.log(nuevoArreglo);

//INCLUDES
const resultado=meses.includes('Diciembre'); //BUSCA Diciembre en el arreglo
console.log(resultado);


//ARREGLO DE OBJETOS
const carrito =[
    {nombre:'Monitor', precio: 20},
    {nombre:'laptop', precio:10}
];


//SOME ARREGLO DE OBJETOS
resultado = carrito.some(function(producto){//BUSCA LA LAPTOP EN EL ARREGLO 
    return producto.nombre=='laptop'
})


//REDUCE(PARA SUMAR LOS PRECIOS DEL ARREGLO)
resultado=carrito.reduce(function(total,precio){
    return total + producto.precio
}, 0);

//OTRA FORMA DE ESCRIBIR LO MISMO
resultado=carrito.reduce((total,producto) => total + producto.precio,0);

//FILTER 

resultado=carrito.filter(function(producto){
    return producto.precio > 500
});