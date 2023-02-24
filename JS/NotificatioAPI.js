const boton =document.querySelector('#boton');

boton.addEventListener('click',()=>{
 Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`));
});


if(Notification.permission =='granted'){
    new Notification('Esta es una NOtificacion',{
        icon:'https://img.freepik.com/fotos-premium/primer-plano-perro-raza-mixta-jadeando_191971-7459.jpg',
        body: 'Codigo Exchange'

    })
}