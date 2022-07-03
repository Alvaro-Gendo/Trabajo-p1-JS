//Ejercicio numero 7

let numero1 = parseInt(prompt("Ingrese un primer número"));
let numero2 = parseInt(prompt("Ingrese segundo número"));
let numero3 = parseInt(prompt("Ingrese tercer número"));

if(numero1 > numero2){
    document.write("El primer número es el mayor de los tres: " + numero1)
}else if(numero2 > numero3){
    document.write("El segundo número es el mayor de los tres: " + numero2)
  }else{
    document.write("El tercer número es el mayor de los tres: " + numero3)
  }