const usuarioAutenticado =new Promise((resolve,reject)=>{
    const auth = true;

    if(auth){
        resolve("Usuario Autenticado");//SE CUMPLE EL PROMISE
    }else{
        reject("Erro");//NO SE CUMPLE EL PROMISA
    }
});

/**
 * EN LOS PROMISES EXISTEN 3 VALORES
 * PENDING:NO SE HA CUMPLIDO PERO TAMPOCO RECHAZADO
 * FULLFILLED:YA SE CUMPLIO
 * REJECTED:SE RECHAZO O NO SE PUDO CUMPLIR
 */


//OPCION 1-ARROW FUNCTION
usuarioAutenticado
        .then((resultado)=>console.log(resultado))
        .catch((error)=>console.log(error));

        //OPCION 2

    usuarioAutenticado
            .then(function(resultado){
                console.log(resultado)
            })
            .catch(function(error){
                console.log(error);
            })


