/*
estructura de bucle for

for(desde; hasta;actualizacion){}
    codigo a repetir
}
*/
//hacer un for para escribir varias veces hola a todos
//i++=== i=i+1
//------------------------
/*
for(let i=0;i<100;i++){
    console.log("Hola",i)
}
*/
//------------------------
// hacer tabla de multiplicar de un numero que ingresamos
/*
let numero = parseInt(prompt("ingrese el numero"));
for(let i=1;i<=10;i++){
    let resultado=numero*i;
    alert(`${numero} X ${i} = ${resultado}`)
}
*/
//------------------------
// hacer una agenda de turnos
/*
for(let turno = 1; turno <=7; turno++){
    let nombre = prompt("ingrese su nombre");
    alert(`turno numero ${turno} Nombre: ${nombre}`);
}
alert(`no hay mas turnos`);
*/
//------------------------
// hacer un break. cuando i valga 5, que salga del for
/*
for (let i=0;i<10;i++){
    if(i === 5){
        console.log("numero del break", i);
        break;
    }
    console.log(i);
}
*/
//------------------------
// usar el continue. lo que hace es encontrar ese valor y exluirlo
/*for (let i=0;i<10;i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}
*/
//------------------------
/* while
estructura
while(condicion){
    codigo que voy a repetir SIEMPRE que la condicion sea verdadera
}
*/
//COMO HACER UN BUCLE INFINITO CON WHILE
/*
let repetir = true;
while(repetir){
    console.log("hola");
}
*/
// Ingresar un usuario y volver a consultarlo para que no quede en bucle infinito
/*
let usuario = prompt("ingrese el usuario");
while(usuario != "camila"){
    alert("usuario incorrecto");
    usuario = prompt("ingrese el usuario");
}
alert("bienvenida");
*/
// WHILE PRIMERO EVALUA Y DESPUES ACTUA
// DO WHILE PRIMERO EJECUTA Y DESPUES EVALUA, POR ENDE INGRESA POR LO MENOS UNA VEZ
/*
let repetir = false;
while(repetir){
    console.log("entramos");    
}

do{
    console.log("entramos")
}while(repetir);
*/
//---------------------
/* Estructura de SWITCH
switch(valor){
    Case valor1:
        codigo a ejecutar en caso que valor sea igual a valor1
        break;
    case valor2:
        codigo a ejecutar en caso que valor sea igual a valor2
        break;
    case XXX
    .
    .
    .
    default:
        codigo a ejecutar en caso que valor no sea ninguno de los anteriores
        break;
}
*/
//Utilizo el switch para ver si la var moneda corresponde a algun case.
/*
let moneda ="arg";
switch(moneda){
    case "cop":
        console.log("moneda de colombia");
        break;
    case "ars":
        console.log("moneda de argentina");
        break;
    case "clp":
        console.log("moneda de chile");
        break;
    default:
        console.log("no es ninguna de las monedas anteriores");
        break;
}
*/

