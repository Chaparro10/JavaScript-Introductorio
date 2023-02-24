

async function obtenerEmpleados(){

    const archivo = 'Empleados.json';


    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

 }

 obtenerEmpleados();