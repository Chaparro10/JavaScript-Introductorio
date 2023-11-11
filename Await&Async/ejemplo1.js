const objeto ={
    propiedad1:"Valor1",
    propiedad2:"valor2",
    propiedad3:"valor3"
};


const obtenerInformacion=()=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(objeto)},2000)
   })
}

const mostrarResultado=async ()=>{
    resultado=await obtenerInformacion();
    console.log(resultado)
}

mostrarResultado();