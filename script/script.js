calculateIMC = (weight, height) => {
    const heightCM = height / 100
    const imc = weight / (heightCM ** 2)
    return imc.toFixed(2)
}


const execute = () => {
    const imc_form = document.querySelector('#imc_form')
    const target = document.querySelector('.target')
    const reset = document.getElementById('reset')
    const weight = document.getElementById('peso')
    const height = document.getElementById('altura')
    const name = document.getElementById('nome')
    const showName = document.getElementById('mostrar_nome')


    imc_form.addEventListener('submit', event => {
        event.preventDefault()

        const imc = calculateIMC(parseInt(weight.value), parseInt(height.value))

        if (showName.checked === true) {
            target.textContent = `${name.value}, seu IMC é de ${imc}.`
        } else {
            target.textContent = `Seu IMC é de ${imc}.`
        }

    })

    reset.addEventListener('click', () => {
        target.textContent = ''
    })

    weight.addEventListener('input', () => {
        target.textContent = ''
    })

    height.addEventListener('input', () => {
        target.textContent = ''
    })

    name.addEventListener('input', () => {
        target.textContent = ''
    })
}
execute()