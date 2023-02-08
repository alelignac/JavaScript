/*
estructira de condicional if
if(condicion){
    codigo
}

let respuesta="no";
if(respuesta === "si"){
    console.log("podes salir a jugar");
}else{
    console.log("no podes salir a jugar")
}
*/
//-----------------------
/* = significa asignacion
== comparacion solo de valor
=== comparacion tanto de valor como tipo de dato
*/
/*if(condicion1){
    codigo a ejecutar cuando la condicion1 sea verdadera
}else if{
    codigo a ejecutar cuando la condicion2 es verdadera
}else{
    codigo a ejecutar solo cuando todas las condiciones son falsas
}

let edad = parseInt(prompt("ingrese la edad"));
if(edad <14){
    alert("no podes entrar a la fiesta");
}else if(edad <18){
    alert("puedes entrar con un adulto");
}else{
    alert("puedes entrar a la fiesta");
}
*/
//----------------------IF CON DOS VARIABLES QUE DEBEN SER VERDADERO------
/*valor1 && valor2 es verdadero cuando ambos valores son verdaderos, de lo contrario es falso.
valor1 || valor2 es verdadero cuando al menos uno de los valores es verdadero, de lo contrario es falso

let nombre="andres";
if(nombre!=" " && nombre==="andres"){
    console.log("hola andres");
}else{
    console.log("nombre incorrecto")
}
*/
//----------------------USAR MODULO-------
/*
let numero = parseInt(prompt("ingrese un numero"));
if (numero%2 === 0){
    alert("es par")
}else{
    alert("no es par")
}
*/
//----------------------USAR INCULDE------
/*
let palabra = prompt("ingrese la palabra");

if(palabra.includes("s")){
    alert("contiene la s")
}else{
    alert("no contiene la s")
}
*/
//----------------------

// Crear una función que habilita la creación de un usuario
// EN EL MUNDO REAL: sería después, aplicado con HTML, una función muy similar a lo que haríamos en un registro.
// LLEGAR A LOS INPUTS <- OBJETIVO

let catalogo = 'PIZZAS - HAMBURGUESAS - GASEOSAS - AGUAS'
let edad = Number(prompt('Ingrese su edad'))
let mayorDeEdad = (edad >= 18) // SI EDAD ES MAYOR O IGUAL A 18 ESTO RETORNA TRUE
if ( mayorDeEdad ){
  console.info('El usuario es mayor de edad')
  catalogo += '- BEBIDAS ALCOHOLICAS'
} else {
  console.error('El usuario es menor de edad')
}
//const alertMessage = 'Catalogo disponible'+catalogo
//alert(alertMessage)
let eleccion = prompt('¿Qué desear comprar?: '+catalogo)
if ( eleccion === 'PIZZAS' || eleccion === 'HAMBURGUESAS' || eleccion === 'GASEOSA' || eleccion === 'AGUAS' || (eleccion === 'BEBIDAS ALCOHOLICAS' && mayorDeEdad)){
  alert('El usuario eligio algo correcto')
}else{
  alert('El usuario eligió algo incorrecto')
}

//----------------------