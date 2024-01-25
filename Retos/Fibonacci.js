function generarFibonacci(n) {
    let fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        console.log("posicion:"+i +"")
        let nuevoNumero = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nuevoNumero);
    }

    return fibonacci;
}


let resultado = generarFibonacci(5);
console.log(resultado);  // Imprimirá [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
