//THIS

const reservacion ={
    nombre:'Juan',
    Total: 500,
    informacion: function(){
        console.log(`El cliente :${this.nombre} reservo  y va a pagar :${this.Total}`);
    }
}

reservacion.informacion();