

//Async / await

function DescargaCliente(){
    return new  Promise(resolve =>{
        console.log('Descargando Clientes');

        setTimeout(()=>{
            resolve('Los clientes se descargaron')
        },3000);
    });
    
}


async function app(){
    try {
        const resultado=await DescargaCliente();
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
}

app();


//DOS CONSULTAS ASYNC AWAIT


function DescargaPedido(){
    return new  Promise(resolve =>{
        console.log('Descargando Pedido');

        setTimeout(()=>{
            resolve('Los pedidos se descargaron')
        },3000);
    });
    
}


async function app(){
    try {
        const resultado=  await Promise.all([DescargaCliente() , DescargaPedido()])
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
}