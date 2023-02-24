//Metodos de propiedad
const reproductor={
    reproducir : function(id){
        console.log(`Reproduciendo cancion : ${id}`)
    },

    pausar: function(){
        console.log('Pausa')
    },
    crearPlayList : function(nombre){
            console.log(`Se ha creado : ${nombre}`);
    },
    reproducePlayList : function(nombre){
         console.log(`Reproduciendo play List : ${nombre}`)
    }
}
//METODO PROPIEDAD FUERA DEL OBJETO
reproductor.eliminaCancion= function(id){
    console.log(`Eliminada : ${id}`)
}
reproductor.reproducir(1);
reproductor.pausar();
reproductor.crearPlayList('EL MANCO');
reproductor.reproducePlayList('EL MANCO');