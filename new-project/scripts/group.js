const select_estado = document.getElementById('select-estado')

const estados_brasil = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let i = 0; i < estados_brasil.length; i++) {
    const estado = estados_brasil[i];
    const newOption = document.createElement('option')
    newOption.innerText = estado

    select_estado.append(newOption)
}


