import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calcIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const inputIsNaN = notANumber(weight) || notANumber(height)
    
    if (inputIsNaN) {
        AlertError.open()
        return;
    }

    const resultIMC = calcIMC(weight, height)
    displayResultMessage(resultIMC)     
}

function displayResultMessage(resultIMC) {
    Modal.message.innerText = resultIMC
    Modal.open()
}
