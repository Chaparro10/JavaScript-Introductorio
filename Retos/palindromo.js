

function leerEntrada() {
    var entrada = document.getElementById("inputField").value;
    var cadenaVol = '';

    for (var i = entrada.length - 1; i >= 0; i--) {
        cadenaVol += entrada[i];
    }
/*
    if(entrada === cadenaVol){
        console.log('es palindromo');
    }else{
        console.log('no es palindromo');
    }*/

    const EsoNo = entrada===cadenaVol?'palindromo' : 'no es palindromo';//OPERADOR TERNARIO

    console.log(EsoNo);
    console.log("Valor ingresado al revés:", cadenaVol);
}
