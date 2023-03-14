let token = JSON.parse(localStorage.getItem('token'))


fetch(`http://localhost:8080/profile`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'x-access-token': token
    },
})
    .then(response => response.json())
    .then(item => {
        const containerProfile = document.getElementById('containerProfile');
        let fragment = ''
        fragment += `
                    <h2>
                        Id: ${item.id}
                    </h2>
                    <h2>
                        Nombre: ${item.name}
                    </h2>
                    <h2>
                        Rut: ${item.rut}
                    </h2>
                    <h2>
                        Fecha de creación: ${item.createdAt}
                    </h2>
                `
        containerProfile.innerHTML = fragment
    })
    .catch(err => console.log(err))

