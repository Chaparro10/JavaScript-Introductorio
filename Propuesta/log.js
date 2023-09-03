

function DiceSi(){

    const respuesta =confirm('¿Estas segura de tomar esta decision?');

    if(respuesta){
        window.location.href="opcionSi.html";
    }else{
        alert("Piensalo Bien");
    }


}

function DiceNo(){
  
    const width=window.innerWidth;
    const height =window.innerHeight;

    const newWidth=Math.random()*width;
    const newHeight=Math.random()*height;

    const btnNo=document.getElementById("btnNo");
    btnNo.style.position="absolute";
    btnNo.style.left=newWidth+"px";
    btnNo.style.top=newHeight+"px";
    

}