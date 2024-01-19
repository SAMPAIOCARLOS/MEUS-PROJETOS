const form_grou = document.getElementById('form-group')
const solicitante = document.getElementById('Solicitante')
const Data_visita_group = document.getElementById('Data-visita-group')
const telefone_group = document.getElementById('telefone-group')
const email_group = document.getElementById('email-group')
const conf_email_group = document.getElementById('conf-email-group')
const rua = document.getElementById('rua')
const N = document.getElementById('N')
const bairro = document.getElementById('bairro')
const cep = document.getElementById('cep')
const cidade = document.getElementById('city')
const select_case_yes = document.getElementById('select-case-yes')
const select_case_yes_escolaridade = document.getElementById('select-case-yes-escolaridade')
const Faixa_etaria_yes = document.getElementById('Faixa-etaria-yes')
const Quantidade_yes = document.getElementById('Quantidade-yes')
const name_instituicao_case_no = document.getElementById('name-instituicao-case-no')
const Faixa_etaria_no = document.getElementById('Faixa-etaria-no')
const Quantidade_no = document.getElementById('Quantidade-no')
const campo_def_case_yes = document.getElementById('campo-def-case-yes').value
const campo_def_case_no = document.getElementById('campo-def-case-no').value


const case_yes = document.getElementById('case_yes')
const case_no = document.getElementById('case_no')


const select_estado = document.getElementById('select-estado')
const estados_brasil = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


for (let i = 0; i < estados_brasil.length; i++) {
    const estado = estados_brasil[i];
    const newOption = document.createElement('option')
    newOption.innerText = estado

    select_estado.append(newOption)
}

function isEmailValue(email) { 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

function validarCEP(cep) {
    
    var regexCEP = /^[0-9]{5}-?[0-9]{0,3}$/;

  
    if (regexCEP.test(cep)) {
      return true; // CEP válido
    } else {
      return false; // CEP inválido
    }
  }

function isTelefoneValue() {
    telefone_group.addEventListener('keyup', ()=> {
             
        var apenasNumeros = telefone_group.value.replace(/\D/g, '');

        if (apenasNumeros.length <= 2) {
            telefone_group.value = apenasNumeros;
        } else if (apenasNumeros.length <= 6) {
            telefone_group.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2);
        } else {
            telefone_group.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2, 6) + '-' + apenasNumeros.slice(6);
        }
  
    });
}



document.addEventListener("DOMContentLoaded", ()=> {
    isTelefoneValue()
});


const box_case_yes = document.getElementById('box-case-yes')
const box_case_no = document.getElementById('box-case-no')

document.getElementById('case_yes').addEventListener('click', (event)=> {
    box_case_no.style.display = 'none'
    box_case_yes.style.display = 'flex'

    document.getElementById('case_no').checked = false
})

document.getElementById('case_no').addEventListener('change', ()=> {
    box_case_yes.style.display = 'none'
    box_case_no.style.display = 'flex'

    document.getElementById('case_yes').checked = false
})

form_grou.addEventListener('submit', (event)=> {
    event.preventDefault()

    if(solicitante.value.length < 3) {
        validarName(solicitante, '.span-name-group')
        return
    } else {
        validarName(solicitante, '.span-name-group')
    }

    let valorCampo = Data_visita_group.value;
    let dataHora = new Date(valorCampo);

    if (dataHora < new Date()) {
        Data_visita_group.style.border = '1px solid rgb(186, 0, 0)'
        document.getElementById('icon-data-hora-group').style.display = 'block'
        document.getElementById('campo-data-visita-group').innerText = 'Você tem que selecionar uma data maior que a atual!'
        Data_visita_group.focus()
        return 
    }

    if (!isNaN(dataHora.getTime())) {
      if (dataHora.getDay() === 1) {
        Data_visita_group.style.border = '1px solid rgb(186, 0, 0)'
        document.getElementById('icon-data-hora-group').style.display = 'block'
        document.getElementById('campo-data-visita-group').innerText = 'Não funcionamos as segundas-feiras!'
        Data_visita_group.focus()
        return
      } else{
        Data_visita_group.style.border = 'none'
        document.getElementById('icon-data-hora-group').style.display = 'none'
        document.getElementById('campo-data-visita-group').innerText = ''
      }
    } else {
        Data_visita_group.style.border = '1px solid rgb(186, 0, 0)'
        document.getElementById('icon-data-hora-group').style.display = 'block'
        document.getElementById('campo-data-visita-group').innerText = 'Preencha este campo!'
        Data_visita_group.focus()
        return
    }

    if(telefone_group.value.length < 11) {
        telefone_group.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-telefone-group').style.display = 'block'
        telefone_group.focus()
        return
    } else {
        telefone_group.style.border = 'none'
        document.querySelector('.span-telefone-group').style.display = 'none'
    }


    if(email_group.value === '' || !isEmailValue(email_group.value)) {
        email_group.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-email-group').style.display = 'block'
        email_group.focus()
        return
    } else {
        email_group.style.border = 'none'
        document.querySelector('.span-email-group').style.display = 'none'
    }

    if(email_group.value === conf_email_group.value) {
        conf_email_group.style.border = 'none'
        document.querySelector('.span-conf-email-group').style.display = 'none'
    } else {
        conf_email_group.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-conf-email-group').style.display = 'block'
        conf_email_group.focus()
        return
    }

    

    if(rua.value === '') {
        vazio(rua, '.span-invalido-rua')
        return
    } else {
        vazio(rua, '.span-invalido-rua')
    }

    if(N.value === '') {
        vazio(N, '.span-invalido-N')
        return
    } else {
        vazio(N, '.span-invalido-N')
    }

    if(bairro.value === '') {
        vazio(bairro, '.span-invalido-bairro')
        return
    } else {
        vazio(bairro, '.span-invalido-bairro')
    }

    if(cep.value === '' || !validarCEP(cep.value)) {
        cep.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-invalido-cep').style.display = 'block'
        cep.focus()
        return
    } else {
        cep.style.border = 'none'
        document.querySelector('.span-invalido-cep').style.display = 'none'
    }

    if(cidade.value === '') {
        vazio(cidade, '.span-invalido-city')
        return
    } else {
        vazio(cidade, '.span-invalido-city')
    }

    if(select_estado.value === '') {
        vazio(select_estado, '.span-invalido-estado')
        return
    } else{
        vazio(select_estado, '.span-invalido-estado')
    }
//

    if(case_yes.checked === true) {

        if(select_case_yes.value === '') {
            vazio(select_case_yes, '.span-invalido-instituicao')
            return
        } else{
            vazio(select_case_yes, '.span-invalido-instituicao')
        }
    
        if(select_case_yes_escolaridade.value === '') {
            vazio(select_case_yes_escolaridade, '.span-invalido-escolaridade')
            return
        } else{
            vazio(select_case_yes_escolaridade, '.span-invalido-escolaridade')
        }
    
        if(Faixa_etaria_yes.value === '') {
            vazio(Faixa_etaria_yes, '.span-invalido-faixaEtaria')
            return
        } else {
            vazio(Faixa_etaria_yes, '.span-invalido-faixaEtaria')
        }
    
        if(Quantidade_yes.value === '') {
            vazio(Quantidade_yes, '.span-invalido-quantidade')
            return
        } else{
            vazio(Quantidade_yes, '.span-invalido-quantidade')
        }
    } else {
        if(name_instituicao_case_no.value === '') {
            vazio(name_instituicao_case_no, '.span-name-instituicao-case-no')
            return
        } else {
            vazio(name_instituicao_case_no, '.span-name-instituicao-case-no')
        }
    
        if(Faixa_etaria_no.value === '') {
            vazio(Faixa_etaria_no, '.span-invalido-faixaEtaria-case-no')
            return
        } else {
            vazio(Faixa_etaria_no, '.span-invalido-faixaEtaria-case-no')
        }

        if(Quantidade_no.value === '') {
            vazio(Quantidade_no, '.span-invalido-quantidade-case-no')
            return
        } else {
            vazio(Quantidade_no, '.span-invalido-quantidade-case-no')
        }

    }
    


})

