const materiasHTML=document.querySelector(".materias");

const materias=[
    {
        nombre:"fisica 4",
        nota:7
    },
    {
        nombre:"calculo 3",
        nota:8
    },
    {
        nombre:"Base de Datos 4",
        nota:9
    },
    {
        nombre:"Programacion 3",
        nota:10
    }
    ,
    {
        nombre:"Matematicas Discretas",
        nota:8
    }
]


const obtenerMateria=(id)=>{
    return new Promise((resolve,rehect)=>{
        materia=materias[id];
        if(materia==undefined){
                reject("La materia no existe");

        }else{
            setTimeout(()=>{resolve(materia)},Math.random()*400);
        }

    })
}

const devolverMaterias=async()=>{
    let materia=[];
    for(var i=0;i<materias.length;i++){
        materia[i]= await obtenerMateria(i);
       
        let newHTMLcode=`
        <div class="materia">
            <div class="nombre">${materia[i].nombre} </div>
            <div class="nota">${materia[i].nota} </div>
        </div>`;

        materiasHTML.innerHTML +=newHTMLcode;

    }
}


devolverMaterias();

