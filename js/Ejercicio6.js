// Ejercicio numero 6 del practico

let numero1 = parseInt(prompt("Ingrese un número"))
let numero2 = parseInt(prompt("Ingrese otro número"))

if(numero1 > numero2){
    document.write("El primer número es el mayor: " + numero1);
}else{
    if(numero1 < numero2){
        document.write("El segundo número es el mayor: " + numero2);
    }
}