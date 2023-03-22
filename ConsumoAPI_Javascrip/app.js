//ASYNC-AWAIT FUNCION QUE LLAMA A UNA API .
async function traePersona(){
    const respuesta=await fetch('https://fakestoreapi.com/products/1')
    //.then(res=>res.json())
    //.then(json=>console.log(json.id +"" +json.title)); //OPCION 1
  
    const datos=await respuesta.json();//OPCION2
    console.log(datos.id +""+datos.title);
    
}