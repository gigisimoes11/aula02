// Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida
// 10. Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.

var dia = 11
var mes = 23
var ano = 22
 
if (ano >= 1000){    
    if (mes >= 1){
        if(mes <= 12){
            if (mes == 2){
                if (dia >= 1){
                    if (dia <= 28){
                        console.log("a data está valida")
                    }else {console.log("a data invalida")}
                }
            }else {
                if (dia >= 1){
                    if (dia <= 30){
                        console.log("a data está valida")
                    }else {console.log("a data invalida")}
                }
            }
 
        }else {console.log("a esta data invalida")}
    }else {console.log("a esta data invalida")}
 
}else {console.log("a esta data invalida")}
 