// Escreva um programa que converta uma temperatura de Celsius para Fahrenheit e vice-versa.

var temperatura = 12
var tipotemperatura = "C"
var temperaturaconvertida = 0

if (tipotemperatura == "C"){
    console.log("voce escolheu celsius")
    temperaturaconvertida = ((temperatura * 1.8) + 32)
}else {
    console.log("voce escolheu fahrenheit")
    temperaturaconvertida = ((temperatura - 32) * (5/9))
} console.log ("o valor convertido é " + temperaturaconvertida)