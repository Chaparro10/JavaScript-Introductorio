const cuentaVocales = (palabra) => {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        let vol = palabra[i];
        if (vocales.includes(vol)) {
            contador++;
        }
    }

    return contador;
}
