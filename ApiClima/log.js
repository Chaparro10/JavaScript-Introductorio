// CREACION DE LOS SELECTORES
const result = document.querySelector(".resultado");
const form = document.querySelector(".get-clima");
const nombreCiudad = document.querySelector("#ciudad");
const nombrePais = document.querySelector("#pais");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Elimina cualquier mensaje de error anterior
    eliminarMensajesError();

    if (nombreCiudad.value === '' || nombrePais.value === '') {
        muestraError("No puede haber espacios vacíos");
        return;
    }

    await llamarAPI(nombreCiudad.value, nombrePais.value);
});

const llamarAPI = async (ciudad, pais) => {
    try {
        const apiID = 'bd92ba2ac3bc02d1ccee2c7f5db0d282';
        const urlUbicacion = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=${1}&appid=${apiID}`;

        // Realizar una solicitud HTTP para obtener datos de ubicación usando fetch
        const response = await fetch(urlUbicacion);

        // Verificar si la solicitud se realizó con éxito (código 200)
        if (response.ok) {
            const data = await response.json();
            const { lat, lon } = data[0];

            // Ahora que tienes las coordenadas, puedes obtener datos climáticos
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}`;
            const responseClima = await fetch(urlClima);

            // Verificar si la solicitud de datos climáticos se realizó con éxito (código 200)
            if (responseClima.ok) {
                const datosClima = await responseClima.json();
                console.log('Datos climáticos:', datosClima);
                mostrarClima(datosClima);
            } else {
                muestraError('Error al obtener datos climáticos.');
            }
        } else {
            muestraError('Error al obtener datos de ubicación.');
        }
    } catch (error) {
        muestraError('Error en la solicitud API:', error);
    }
}

const mostrarClima = (data) => {
    const { name, main: { temp, temp_min, temp_max,humidity },wind:{speed}, weather: [arr] } = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);
    const humedad=humidity;
    const viento=speed;

    const contenido = document.querySelector('.resultado');
    contenido.innerHTML = `
        <h5> Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
        <h2>${degrees}°C</h2>
        <p>Max: ${max}°C</p>
        <p>Min: ${min}°C</p>
        <p>Humedad: ${humedad}%</p>
        <p>Viento: ${viento}Km/h</p>
        `;   
}

const muestraError=(mensaje)=> {
    // Elimina cualquier mensaje de error anterior
    eliminarMensajesError();

    // Crear Etiqueta para mensaje de error
    const alert = document.createElement('div');
    alert.classList.add('alert-danger');
    alert.innerHTML = mensaje;
    form.appendChild(alert);

    // Para que la alerta desaparezca después de un tiempo determinado
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

const eliminarMensajesError =() =>{
    const mensajesError = document.querySelectorAll('.alert-danger');
    mensajesError.forEach((mensaje) => {
        mensaje.remove();
    });
}

const kelvinToCentigrade = (temp) => {
    return (temp - 273.15).toFixed(2); // Redondea a dos decimales
}