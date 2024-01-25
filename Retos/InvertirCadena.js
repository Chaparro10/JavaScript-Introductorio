

const InvierteCadena=(Cadena)=>{
        let CadenaInv="";

        for(let i =Cadena.length-1;i>=0;i--){
            CadenaInv+=Cadena[i]
        }
        return CadenaInv;
}

let Cadena="Perro";
let Invertida=InvierteCadena(Cadena);
console.log(Invertida);