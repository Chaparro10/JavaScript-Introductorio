//FOR
for(let i=0; i<=10;i++){
    console.log(i)
}

for(let x=1;x<=10;x++){
    if(x % 2 ===0){
        console.log(`El numero: ${x} es par`)
    }
}


const carrito =[
    {nombre:'Monitor', precio: 20},
    {nombre:'laptop', precio:10}
];

for(let y=0;y<carrito.length;y++){
    console.log(carrito[i].nombre);
}

//WHILE
let z=0;
while(z<carrito.length){
  console.log(carrito[z].nombre);

  z++;
}


//DO WHILE
let l=0;
do{
 console.log('Estoy aqui')
 l++;
}while(l<10);