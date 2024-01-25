

const Repite =(cadena,array)=>{
    let n=0;
    for(let i=0;i<array.length;i++){
                let cr=array[i];
                if(cadena===cr){
                        n++;
                }
    }
    return n;
}

let array=["gato","gato","perro","chiti"]
cadena="gato"
let Rep=Repite(cadena,array)
console.log(Rep)