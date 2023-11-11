function leerEntrada() {
    var numero = document.getElementById("inputField").value;

    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        console.log('No es primo');
        return;
    }

    // Comprobación de divisibilidad desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        console.log(Math.sqrt(numero))
        console.log('aqui estoy');
        if (numero % i === 0) {
            console.log((numero % i))
            console.log('No es primo');
            return;
        }
    }

    console.log('Es primo');
}
