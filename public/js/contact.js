function contactForm() {
    const btn = document.getElementById('formSend')
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let name = document.getElementById('name').value
        let message = document.getElementById('message').value
        let email = document.getElementById('email').value

        const data = {
            name,
            email,
            message
        }

        if (!Object.values(data).every(value => value != '')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes rellenar todos los campos!'
            })
        } else {
            fetch(`http://18.223.117.204/contact/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(res => {
                    if (res.auth) {
                        Swal.fire({
                            icon: 'Success',
                            title: 'Gracias!',
                            text: `Te enviaremos una respuesta lo antes posible.`
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${res.message}`
                        })
                    }
                })
                .catch(err => console.log(err))
        }
    })
}
contactForm()