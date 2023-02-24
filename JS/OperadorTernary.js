const numToEval =5;

const isEven=(num)=>num %2 ==0;//FUNCION
//IF NORMAL
let eveOddReg;
if(isEven(numToEval)){
    eveOddReg='Even';
}else{
    eveOddReg='add';
}

const evenOrdd = isEven(numToEval)?'even' : 'add';//OPERADOR TERNARIO
console.log('B)',evenOrdd);