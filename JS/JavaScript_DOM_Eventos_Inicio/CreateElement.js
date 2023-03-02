

const nuevoEnlace =document.createElement('a'); //CREANDO UN ENLCACE EN HTML DESDE JAVASCRIPT

nuevoEnlace.href='nuevo-ENLACE.html';

nuevoEnlace.textContent='Nuevo enlace';

//AGREGARLO AL DOCUMENTO

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);