const execute = () => {
    const contactForm = document.getElementById('contactForm')
    const main = document.querySelector('main')
    const h2 = document.querySelector('h2')

    contactForm.addEventListener('submit', e => {
        e.preventDefault()
        contactForm.remove()
        h2.textContent = 'Entraremos em contato em breve!'
    })
}
execute()