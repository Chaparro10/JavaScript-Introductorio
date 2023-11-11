

let nombre ="pedro"
const promesa = new Promise((resolve,reject)=>{
    if(nombre !== "pedro"){
        reject("No es pedro")
    }else{
        resolve(nombre)
    }
})

console.log(promesa);