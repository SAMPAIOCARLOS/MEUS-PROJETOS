const button = document.getElementById('adicionar')
const input = document.getElementById('input')
const myul = document.getElementById('ul')

window.addEventListener("load", ()=> {
    let dados = localStorage.getItem('itens')

    reload(dados)
})

button.addEventListener('click', ()=> {
    myul.innerHTML = ''
    if(input.value === "") {
        alert(`Escreva um item para que possa ser adicionado.`)
        return
    }

    const valorInput = input.value

    let itens = JSON.parse(localStorage.getItem('itens')) || []

    itens.push(valorInput)
    
    localStorage.setItem('itens', JSON.stringify(itens))

    let data = localStorage.getItem('itens')
    
    reload(data)
    
    input.value = ""

})

function reload(data) {
    

    let dataMod = JSON.parse(data)

    for(let i of dataMod) {
        const newli = document.createElement('li')
        newli.innerText = i

        const buttonRemove = document.createElement('button')
        buttonRemove.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
        buttonRemove.id = 'remove'

        newli.append(buttonRemove)

        buttonRemove.addEventListener('click', ()=> {
            myul.removeChild(newli)
            localStorage.removeItem()
        })

        myul.append(newli)
    }

    
}

