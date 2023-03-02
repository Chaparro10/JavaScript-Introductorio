
//EVENTOS

window.addEventListener('load', function () {//load espera a que el js y los archivos que despenden del html esten listos
    console.log(2);
})

window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function () {//solo espera HTML pero no css o imagenes
    console.log(5);
});

window.onscroll = function () {
    console.log('scroling')
}


//SELECCIONAR ELEMENTO DE HTML Y AGREGARLE EVENTOS
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();

});

//EVENTOS DE LOS INPUTS Y TEXTAREA

const datos = { //OBJETOS
    nombre: "",
    email: "",
    mensaje: ""
}



const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', function (evento) {
    console.log(evento.terget.value);
});


email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
//PARA NO REPETIR EL CODIGO SE HACE UNA FUNCION

function leerTexto(evento) {
    console.log(evento.target.value);
}

//EVENTO SUBMIT
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const { nombre, email, mensaje } = datos; //DESTRUCTOR

    if (nombre == '' || email == '' || mensaje == '') {
       MostrarAlerta('Debes Llenar todos los campos','error');
        return;
    }
    MostrarAlerta('Enviando Formulario');
});

/*
//MUESTRA ENVIO CORRECTO EN PANTALLA

function EnvioCorrecto(mensaje) {
    const Envio = document.createElement('P');
    Envio.textContent = mensaje;
    Envio.classList.add('Envio');

    formulario.appendChild(Envio);
}


//MUESTRA EL ERROR EN PANTALLA
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);
}
*/
//OPCION 2 SIMPLIFICANDO(refactorizando) CODIGO
function MostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('Envio');
    }
    formulario.appendChild(alerta);

}