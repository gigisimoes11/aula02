//Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.
//5. Escreva um programa que leia dois números. e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.
 
var num1 = 143

var num2 = 128

var operacao = "+"

var resultado = 0
 
if(operacao == "+"){

resultado = num1 + num2

}
 
else{

    if(operacao == "-"){

        resultado = num1 - num2

    }

    else {

        if(operacao == "/"){

            resultado = num1 / num2

        }

        else {

            if(operacao == "*"){

                resultado = num1 * num2

            }

            else{

                console.log("você não colocou uma forma de operação valida")

            }
 
        }

    }

}
 
console.log("o resultado da sua operação é " + resultado)
 