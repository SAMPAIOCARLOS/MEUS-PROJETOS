const estados_brasil = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
for (const estado of estados_brasil) {
    const newOption = document.createElement('option');
    newOption.innerText = estado

    mySelect_estados.append(newOption)
}

function gerarErrorNoInput(input, span) {
    input.style.border = '1px solid rgb(186, 0, 0)'
    document.querySelector(`.${span}`).style.display = 'flex'
    input.focus();
}

function isEmailValue(value) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value);
}

alert('')
