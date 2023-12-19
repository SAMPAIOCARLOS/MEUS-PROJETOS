const button = document.getElementById('button')


button.addEventListener('click', ()=> {
    fetch('sla.json').then((res)=> {
        res.json()
        .then((data)=> {
            const tbody = document.getElementById('tbody')

            for (let i = 0; i < data.length; i++) {
                const dado = data[i];

             const newRow = tbody.insertRow()
             newRow.setAttribute('class', 'gray')

             const newName = newRow.insertCell()
             newName.innerHTML = dado.name
             newName.id = 'nome' + i

             const newNum = newRow.insertCell()
             newNum.innerHTML = dado.Num

             const newAtivo = newRow.insertCell()
             newAtivo.innerHTML = dado.ativo

             const end = newRow.insertCell()
             end.innerHTML = '<ion-icon name="pencil-outline"></ion-icon> <ion-icon name="trash-outline"></ion-icon>'
             end.setAttribute('class', 'space-around')
                                                                            
                
            }

            const pesquisar = document.getElementById('pesquisar')

            const dados = document.querySelectorAll('#tbody tr')

            pesquisar.addEventListener('keyup', ()=> {

                if(pesquisar.value !== "") {
                    for (let index = 0; index < dados.length; index++) {
                        let item = dados[index];

                        console.log(item)

                        let titilo = item.querySelector('#nome')

                        titilo = titilo.innerHTML.toLowerCase()

                        let textInput = pesquisar.value.toLowerCase()

                        if(!titilo.includes(textInput)) {
                            item.style.display = 'none'
                        } else{
                            item.style.display = 'block'
                        }
                        
                    }
                } else{
                    for(let card of dados) {
                        card.style.display = 'block'
                    }
                }
            })
        })
    })
})

