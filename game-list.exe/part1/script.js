let button = document.getElementById('button')

button.addEventListener('click', ()=> {
    fetch('person.json').then((response)=> {
        response.json()
        .then((data)=> {

            const img = document.getElementById('img')

            for (let i = 0; i < data.length; i++) {
                const item = data[i]

                if(item.nome === 'thrall') {

                    const newfoto = document.createElement('img')
                    newfoto.setAttribute('src', item.url)

                    img.appendChild(newfoto)

                }
            }
        })
    })
})
    