//DECLARACION DE UNA FUNCION

function sumar(){
    console.log(10 + 10);
}

sumar();

//EXPRESION DE LA FUNCION
const sumar2=function(){
    console.log(3 + 3);
}

sumar2();

//IIFE
(function(){
    console.log('Esto tambien es una funcion');
})();

//FUNCIONES CON PARAMETROS
function sumar(numero1,numero2){
    console.log(numero1+numero2);
}

sumar(1,2);


//FUNCIONES CON RETURN
let total=0;

function agregarCarrito(precio){
 return total += precio;
}

function calcularImpuesto(total){
    return 0.16 * total
}

total=agregarCarrito(5000);

console.log(total);
const totalApagar=calcularImpuesto(total);

console.log(totalApagar);