class Persona{
    constructor(nombre,instagram){
        this.nombre=nombre;
        this.instagram=instagram;
    }
}

const data=[
    ["Pedro","@pedro"],
    ["Pedro1","@pedro"],
    ["Pedro2","@pedro"],
    ["Pedro3","@pedro"]
];


const personas=[];

for(let i=0;i<data.length;i++){
    personas[i]=new Persona(data[i][0],data[i][1])
}

console.log(personas);


const obtenerPersona =(id,callback)=>{
    if(personas[id]==undefined){
        callback("No se ha encontrado")
    }else{
        callback(null,personas[id].nombre)
    }
}


obtenerPersona(1,(error,resolve)=>{
    if(error){
        console.log(error);
    }else{
        console.log(resolve);
    }
})


