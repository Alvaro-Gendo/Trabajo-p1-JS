//Ejercicio 10 divisiones 2, 3, 5, 7 en todos ellos

let numero = parseInt(prompt("Ingrese un número"))

if(numero % 2 === 0){
    document.write("El número ingresado es disivible en 2")
 }else if(numero % 3 === 0){
     document.write("El número ingresado es divisible en 3")
 }else if(numero % 5 === 0){
     document.write("El número ingresado es divisible en 5")
 }else{
     document.write("El número ingresado es divisible en 7")
 
}