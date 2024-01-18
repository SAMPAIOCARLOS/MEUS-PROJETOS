const select_estado = document.getElementById('select-estado')

const estados_brasil = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let i = 0; i < estados_brasil.length; i++) {
    const estado = estados_brasil[i];
    const newOption = document.createElement('option')
    newOption.innerText = estado

    select_estado.append(newOption)
}


const box_case_yes = document.getElementById('box-case-yes')
const box_case_no = document.getElementById('box-case-no')

document.getElementById('case_yes').addEventListener('change', ()=> {
    box_case_no.style.display = 'none'
    box_case_yes.style.display = 'flex'
})

document.getElementById('case_no').addEventListener('change', ()=> {
    box_case_yes.style.display = 'none'
    box_case_no.style.display = 'flex'
})

