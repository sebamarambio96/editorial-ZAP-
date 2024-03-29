function register() {
    const btn = document.getElementById('btnSendRegister')
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let name = document.getElementById('name').value
        let rut = document.getElementById('rut').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        // Clear dots
        let newRut = rut.replace('.', '');
        newRut = newRut.replace('.', '');
        // Clear script
        newRut = newRut.replace('-', '');

        const data = {
            name,
            rut:newRut,
            email,
            password
        }

        if (!Object.values(data).every(value => value != '')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes rellenar todos los campos!'
            })
        } else if (data.rut.length >= 10) {
            console.log(data.rut)
            console.log(data.rut.length)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El rut ingresado no es valido'
            })
        } else {
            fetch(`http://18.223.117.204/register/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(res => {
                    if (res.auth) {
                        console.log(res)
                        localStorage.setItem('token', JSON.stringify(res.token))
                        Swal.fire({
                            icon: 'success',
                            title: 'Genial!',
                            text: `Te has registrado correctamente`
                        })
                        location.href = "/index"
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
register()