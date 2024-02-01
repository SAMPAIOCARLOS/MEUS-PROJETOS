const form_grou = document.getElementById('form-group')
const solicitante = document.getElementById('Solicitante')
const telefone_group = document.getElementById('telefone-group')
const email_group = document.getElementById('email-group')
const conf_email_group = document.getElementById('conf-email-group')
const select_responsavel_presente = document.getElementById('select-responsavel-presente')
const Nome_responsavel_case_No = document.getElementById('Nome-responsavel-case-No')
const telefone_responsavel_case_No = document.getElementById('telefone-responsavel-case-No')
const email_responsavel_case_No = document.getElementById('email-responsavel-case-No')
const conf_email_group_responsavel = document.getElementById('conf-email-group-responsavel')
const mySelect_estados = document.getElementById('mySelect-estados')
const mySelect_city = document.getElementById('mySelect-city')
const Nome_Instituição = document.getElementById('Nome-Instituição')
const Natureza_Instituição = document.getElementById('Natureza-Instituição')
const quantidade_participantes = document.getElementById('quantidade-participantes')
const details_faixaEtaria = document.getElementById('details-faixaEtaria')
const input_check = document.querySelectorAll('.input-check')
const select_perfil_group = document.getElementById('select-perfil-group')
const select_deficiencia = document.getElementById('select-deficiencia')
const textarea_Sobre_grupo = document.getElementById('textarea-Sobre-grupo')
const textarea_infor_def = document.getElementById('textarea-infor-def')
const Data_visita_group = document.getElementById('Data-visita-group')
const selects = document.querySelectorAll('.selects')
const campo_text = document.querySelectorAll('.campo_text')
const telefones = document.querySelectorAll('.telefones')


select_responsavel_presente.addEventListener('change', () => {
    if (select_responsavel_presente.value === 'Nao') {
        document.getElementById('box-responsavel-case-No').style.display = 'flex'
    } else {
        document.getElementById('box-responsavel-case-No').style.display = 'none'
    }
})


select_deficiencia.addEventListener('change', () => {
    if (select_deficiencia.value === 'sim') {
        document.getElementById('section-infor-def').style.display = 'flex'
    } else {
        document.getElementById('section-infor-def').style.display = 'none'
    }
})


// function validarCEP(cep) {

//     var regexCEP = /^[0-9]{5}-?[0-9]{0,3}$/;


//     if (regexCEP.test(cep)) {
//       return true; // CEP válido
//     } else {
//       return false; // CEP inválido
//     }
//   }


telefones.forEach(phone => {
    document.addEventListener('DOMContentLoaded', () => {
        phone.addEventListener('keyup', () => {
            let apenasNumeros = phone.value.replace(/\D/g, '');

            if (apenasNumeros.length <= 2) {
                phone.value = apenasNumeros;
            } else if (apenasNumeros.length <= 6) {
                phone.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2);
            } else {
                phone.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2, 6) + '-' + apenasNumeros.slice(6);
            }
        });
    })

});


async function loadCity() {
    try {

        mySelect_city.innerHTML = '<option value="" disabled selected>Carregando...</option>'

        const estadoSelecionado = mySelect_estados.value
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`);
        const data = await response.json();

        if (!response.ok) {
            return
        }

        mySelect_city.innerHTML = ''

        const optionTitle = document.createElement('option');
        optionTitle.disabled = true;
        optionTitle.selected = true;
        optionTitle.innerText = 'Escolha';
        mySelect_city.append(optionTitle);

        data.forEach(city => {
            const Option_city = document.createElement('option');
            Option_city.innerText = city.nome;
            Option_city.value = city.nome.toLowerCase();
            Option_city.text = city.nome;
            mySelect_city.append(Option_city);
        });

    } catch (error) {
        mySelect_city.innerHTML = '<option value="" disabled selected>Error!!</option>'
    }
}

mySelect_estados.addEventListener("change", () => {
    loadCity();
})



campo_text.forEach(campo => {
    campo.addEventListener('keyup', (event)=> {
        const section = event.target.parentNode;
        const span = section.querySelector('span');
        const campo = section.querySelector('.campo_text');

        if (span) {
            if (span.style.display === 'flex') {
                campo.style.border = 'none';
                span.style.display = 'none';
            }
        }
    })
});

selects.forEach(select => {
    select.addEventListener('change', (event)=> {
        const section = event.target.parentNode;
        const span = section.querySelector('span');
        const select = section.querySelector('select');

        if (span) {
            if (span.style.display === 'flex') {
                select.style.border = 'none';
                span.style.display = 'none';
            }
        }
    })
});

form_grou.addEventListener('submit', (event) => {
    event.preventDefault();

    if (solicitante.value.length < 3) return gerarErrorNoInput(solicitante, 'span-name-group');

    if (telefone_group.value.length < 15) return gerarErrorNoInput(telefone_group, 'span-telefone-group')

    if (!isEmailValue(email_group.value)) return gerarErrorNoInput(email_group, 'span-email-group')

    if (email_group.value === conf_email_group.value) {
        validarEmail_conf(email_group, conf_email_group, '.span-conf-email-group')
    } else {
        validarEmail_conf(email_group, conf_email_group, '.span-conf-email-group')
        return
    }

    if(select_responsavel_presente.value === '') return gerarErrorNoInput(select_responsavel_presente, 'span-responsavel-presente')


    if (select_responsavel_presente.value === 'Nao') {

        if (Nome_responsavel_case_No.value.length < 3) return gerarErrorNoInput(Nome_responsavel_case_No, 'span-name-case-responsavel-no')

        if (telefone_responsavel_case_No.value.length < 15) return gerarErrorNoInput(telefone_responsavel_case_No, 'span-telefone-case-responsavel-no')

        if (!isEmailValue(email_responsavel_case_No.value)) return gerarErrorNoInput(email_responsavel_case_No, 'span-email-case-responsavel-no')

        if (email_responsavel_case_No.value !== conf_email_group_responsavel.value) return gerarErrorNoInput(conf_email_group_responsavel, 'span-conf-email-case-responsavel-no')

    } 

    if(mySelect_estados.value === '') return gerarErrorNoInput(mySelect_estados, 'span-select-estado')

    if (mySelect_city.value == 'Escolha') return gerarErrorNoInput(mySelect_city, 'span-select-cidade')

    if(Nome_Instituição.value === '') return gerarErrorNoInput(Nome_Instituição, 'span-name-instituicao')
    
    if(Natureza_Instituição.value === '') return gerarErrorNoInput(Natureza_Instituição, 'span-natureza-instituicao')

    if(quantidade_participantes.value === '') return gerarErrorNoInput(quantidade_participantes, 'span-quant-participantes')

    

    let checkbox_checket = Array.from(input_check).some(checkbox => checkbox.checked);

//EX if(!checkbox_checket) return gerarErrorNoInput(details_faixaEtaria, 'span-details')

    if (!checkbox_checket) {
        details_faixaEtaria.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-details').style.display = 'flex'
        details_faixaEtaria.focus()
        return
    } else {
        details_faixaEtaria.style.border = 'none'
        document.querySelector('.span-details').style.display = 'none'
    }

    if(select_perfil_group.value === '') return gerarErrorNoInput(select_perfil_group, 'span-perfil-group')

    if(select_deficiencia.value === '') return gerarErrorNoInput(select_deficiencia, 'span-portador-def')



    if (select_deficiencia.value == 'sim') {

        if(textarea_Sobre_grupo.value === '') return gerarErrorNoInput(textarea_Sobre_grupo, 'span-textarea-sobre-group')

        if(textarea_infor_def.value === '') return gerarErrorNoInput(textarea_infor_def, 'span-textarea-infor-def')

    }

    if(textarea_Sobre_grupo.value === '') return gerarErrorNoInput(textarea_Sobre_grupo, 'span-textarea-sobre-group')
    

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
        } else {
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

    


})

