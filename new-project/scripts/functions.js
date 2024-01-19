function validarName(name, seletor) {
    if(name.value.length < 3) {
        name.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector(seletor).style.display = 'flex'
        name.focus()
        return
    } else {
        name.style.border = 'none'
        document.querySelector(seletor).style.display = 'none'
    }
}


function vazio(campo, seletor) {
    if(campo.value === '') {
        campo.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector(seletor).style.display = 'block'
        campo.focus()
        return
    }else {
        campo.style.border = 'none'
        document.querySelector(seletor).style.display = 'none'
    }
}