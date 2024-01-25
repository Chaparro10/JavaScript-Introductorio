const ValorMaximo = (arreglo) => {
    let ValorMa = arreglo[0];

    for (let i = 0; i < arreglo.length; i++) {
        if (ValorMa < arreglo[i]) {
            ValorMa = arreglo[i];
        }
    }

    return ValorMa;
}

let arreglo = [1, 2, 3, 45, 6, 7];
let vm = ValorMaximo(arreglo);

console.log(arreglo.length);  // Imprime la longitud del arreglo
console.log(vm);  // Imprime el valor máximo del arreglo
