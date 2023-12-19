const myselect = document.getElementById('myselect')

async function exibirResultados() {
    try {
        const response = await fetch('data.json');
        const data = await response.json()

        const imagem = document.getElementById('Imagem')

        const nome = document.getElementById('nome')
        const nivel = document.getElementById('nivel')
        const classe = document.getElementById('classe')
        const raca = document.getElementById('raca')

        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            
            const valorSelect = myselect.value
            if(valorSelect === element.nome) {
                imagem.setAttribute('src', element.url)

                nome.innerText = element.nome
                nivel.innerText = element.nivel
                classe.innerText = element.classe
                raca.innerText = element.raca
            }
        }
    } catch (error) {
        alert("Deu ruim!!")
        console.log('Deu ruim!!')
    }


}

myselect.addEventListener('change', exibirResultados)