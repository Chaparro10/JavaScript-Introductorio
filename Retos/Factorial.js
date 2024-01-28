const factorial = (n) => {
    if (n >= 0) {
        let resultado = 1;
        for (let i = n; i > 1; i--) {
            resultado *= i;
            console.log(i)
          

        }
        return resultado;
    } else {
        console.log("No se puede calcular el factorial de números negativos");
        return null; // Otra opción es devolver NaN o lanzar una excepción
    }
}

let n = 5;
let y = factorial(n);
console.log("El factorial de " + n + " es: " + y);
