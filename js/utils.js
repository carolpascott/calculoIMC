export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function calcIMC(weight, height) {
    height = height / 100
    
    const imc = weight / (height * height)
    const defaultPhrase = `Seu IMC é de ${imc.toFixed(2)} \n\nVocê está `

    if(imc < 17)      
        return `${defaultPhrase}muito abaixo do peso`
    
    if(imc >= 17 && imc <= 18.49)      
        return `${defaultPhrase}baixo do peso`
   
    if(imc > 18.49 && imc <= 24.99)      
        return `${defaultPhrase}com o peso normal`

    if(imc > 24.99 && imc <= 29.99)      
        return `${defaultPhrase}acima do peso`

    if(imc > 29.99 && imc <= 34.99)      
        return `${defaultPhrase}com obesidade I`

    if(imc > 34.99 && imc <= 39.99)      
        return `${defaultPhrase}com obesidade II (severa)`

    if(imc > 39.99)      
        return `${defaultPhrase}com obesidade III (mórbida)`
    
}
