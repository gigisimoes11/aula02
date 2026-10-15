var temperatura = 31 
var tipoTemperatura = "C"
var temperaturaConvertida = 0

if (tipoTemperatura == "C") {
        console.log("voce escolheu Celsius!")
temperaturaConvertida = ((temperatura * 1.8) + 32)
} else { 
    console.log("voce escolheu Fahrenheit!")
    temperaturaConvertida = ((temperatura - 32) * (5/9))
}


console.log("o valor convertido é " + temperaturaConvertida)