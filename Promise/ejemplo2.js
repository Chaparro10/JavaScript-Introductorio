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


const obtenerPersona = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id] === undefined) {
            reject("No se encontró");
        } else {
            resolve(personas[id]);
        }
    });
}

obtenerPersona(1).then((persona) => {
    console.log(persona.nombre); 
}).catch((e) => {
    console.log(e);
});



