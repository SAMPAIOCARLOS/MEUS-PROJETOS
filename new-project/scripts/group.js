 const form_grou = document.getElementById('form-group')
 const solicitante = document.getElementById('Solicitante')
 const telefone_group = document.getElementById('telefone-group')
 const email_group = document.getElementById('email-group')
 const conf_email_group = document.getElementById('conf-email-group')
 const select_deficiencia = document.getElementById('select-deficiencia')
 const select_responsavel_presente = document.getElementById('select-responsavel-presente')
 const Nome_responsavel_case_No = document.getElementById('Nome-responsavel-case-No')
 const telefone_responsavel_case_No = document.getElementById('telefone-responsavel-case-No')
 const email_responsavel_case_No = document.getElementById('email-responsavel-case-No')
 const conf_email_group_responsavel = document.getElementById('conf-email-group-responsavel')
 const mySelect_estados = document.getElementById('mySelect-estados')
 const mySelect_city = document.getElementById('mySelect-city')

// const case_yes = document.getElementById('case_yes')
// const case_no = document.getElementById('case_no')


const estados_brasil = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


for (let i = 0; i < estados_brasil.length; i++) {
    const estado = estados_brasil[i];
    const newOption = document.createElement('option')
    newOption.innerText = estado

    mySelect_estados.append(newOption)
}



// async function mudarCidade() {
//     const res = await fetch(``)
// }




// const select_responsavel_presente = document.getElementById('select-responsavel-presente')

select_responsavel_presente.addEventListener('change', ()=> {
    if(select_responsavel_presente.value === 'Nao') {
        document.getElementById('box-responsavel-case-No').style.display = 'flex'     
    } else{
        document.getElementById('box-responsavel-case-No').style.display = 'none'
    }
})


select_deficiencia.addEventListener('change', ()=> {
    if(select_deficiencia.value === 'sim') {
        document.getElementById('section-infor-def').style.display = 'flex'
    } else {
        document.getElementById('section-infor-def').style.display = 'none'
    }
})





function isEmailValue(campo) { 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(campo);
}

// function validarCEP(cep) {
    
//     var regexCEP = /^[0-9]{5}-?[0-9]{0,3}$/;

  
//     if (regexCEP.test(cep)) {
//       return true; // CEP válido
//     } else {
//       return false; // CEP inválido
//     }
//   }


const telefones = document.querySelectorAll('.telefones')

telefones.forEach(phone => {

    document.addEventListener('DOMContentLoaded', ()=> {

        phone.addEventListener('keyup', ()=> {
                 
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




// function isTelefoneValue() {
//     telefone_group.addEventListener('keyup', ()=> {
             
//         var apenasNumeros = telefone_group.value.replace(/\D/g, '');

//         if (apenasNumeros.length <= 2) {
//             telefone_group.value = apenasNumeros;
//         } else if (apenasNumeros.length <= 6) {
//             telefone_group.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2);
//         } else {
//             telefone_group.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2, 6) + '-' + apenasNumeros.slice(6);
//         }
  
//     });
// }




// document.addEventListener("DOMContentLoaded", ()=> {
//     isTelefoneValue()
// });


// const box_case_yes = document.getElementById('box-case-yes')
// const box_case_no = document.getElementById('box-case-no')

// document.getElementById('case_yes').addEventListener('click', (event)=> {
//     box_case_no.style.display = 'none'
//     box_case_yes.style.display = 'flex'

//     document.getElementById('case_no').checked = false
// })

// document.getElementById('case_no').addEventListener('change', ()=> {
//     box_case_yes.style.display = 'none'
//     box_case_no.style.display = 'flex'

//     document.getElementById('case_yes').checked = false
// })


// function carregar() {
//     const estadoSelecionado = mySelect_estados.value
//     fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`).then((res)=> {
//     return res.json()
//     }).then((data)=> {
//         mySelect_city.innerHTML = ''
//         data.forEach(element => {
            
//             const newoption = document.createElement('option');
//             newoption.innerText = element.nome

//             mySelect_city.append(newoption)
//         });
//     })
// }

async function loadCity() {
    try {
        const estadoSelecionado = mySelect_estados.value
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        const data = await response.json()

        mySelect_city.innerHTML = ''

        data.forEach(city => {
            const Option_city = document.createElement('option')
            Option_city.innerText = city.nome

            mySelect_city.append(Option_city)
        });

    } catch (error) {
        
    }
}

mySelect_estados.addEventListener("change", ()=> {
    loadCity()
})


form_grou.addEventListener('submit', (event)=> {
    event.preventDefault()


    

    if(solicitante.value.length < 3) {
        validarName(solicitante, '.span-name-group')
        return
    } else {
        validarName(solicitante, '.span-name-group')
    }

    // let valorCampo = Data_visita_group.value;
    // let dataHora = new Date(valorCampo);

    // if (dataHora < new Date()) {
    //    Data_visita_group.style.border = '1px solid rgb(186, 0, 0)'
    //    document.getElementById('icon-data-hora-group').style.display = 'block'
    //    document.getElementById('campo-data-visita-group').innerText = 'Você tem que selecionar uma data maior que a atual!'
    //    Data_visita_group.focus()
    //    return 
    // }

    // if (!isNaN(dataHora.getTime())) {
    //   if (dataHora.getDay() === 1) {
    //     Data_visita_group.style.border = '1px solid rgb(186, 0, 0)'
    //     document.getElementById('icon-data-hora-group').style.display = 'block'
    //     document.getElementById('campo-data-visita-group').innerText = 'Não funcionamos as segundas-feiras!'
    //     Data_visita_group.focus()
    //     return
    //   } else{
    //     Data_visita_group.style.border = 'none'
    //     document.getElementById('icon-data-hora-group').style.display = 'none'
    //     document.getElementById('campo-data-visita-group').innerText = ''
    //   }
    // } else {
    //     Data_visita_group.style.border = '1px solid rgb(186, 0, 0)'
    //     document.getElementById('icon-data-hora-group').style.display = 'block'
    //     document.getElementById('campo-data-visita-group').innerText = 'Preencha este campo!'
    //     Data_visita_group.focus()
    //     return
    // }

    if(telefone_group.value.length < 11) {
        validarPhone(telefone_group, '.span-telefone-group')
        return
    } else {
        validarPhone(telefone_group, '.span-telefone-group')
    }


    if(email_group.value === '' || !isEmailValue(email_group.value)) {
        validarEmail(email_group, '.span-email-group')
        return
    } else {
        validarEmail(email_group, '.span-email-group')
    }

    if(email_group.value === conf_email_group.value) {
        validarEmail_conf(email_group, conf_email_group, '.span-conf-email-group')
    } else {
        validarEmail_conf(email_group, conf_email_group, '.span-conf-email-group')
        return
    }

    
    if(select_responsavel_presente.value === '') {
        vazio(select_responsavel_presente, '.span-responsavel-presente')
        return
    } else {
        vazio(select_responsavel_presente, '.span-responsavel-presente')
    }



    if(select_responsavel_presente.value === 'Nao') {
        
        if(Nome_responsavel_case_No.value.length < 3) {
            validarName(Nome_responsavel_case_No, '.span-name-case-responsavel-no')
            return
        } else {
            validarName(Nome_responsavel_case_No, '.span-name-case-responsavel-no')
        }

        if(telefone_responsavel_case_No.value.length < 11) {
            validarPhone(telefone_responsavel_case_No, '.span-telefone-case-responsavel-no')
            return
        } else{
            validarPhone(telefone_responsavel_case_No, '.span-telefone-case-responsavel-no')
        }


        if(email_responsavel_case_No.value === '' || !isEmailValue(email_responsavel_case_No.value)) {
            validarEmail(email_responsavel_case_No, '.span-email-case-responsavel-no')
            return
        } else {
            validarEmail(email_responsavel_case_No, '.span-email-case-responsavel-no')
        }
    
        if(email_responsavel_case_No.value === conf_email_group_responsavel.value) {
            validarEmail_conf(email_responsavel_case_No, conf_email_group_responsavel, '.span-conf-email-case-responsavel-no')
        } else {
            validarEmail_conf(email_responsavel_case_No, conf_email_group_responsavel, '.span-conf-email-case-responsavel-no')
            return
        }   

          
    }

    if(mySelect_estados.value === '') {
        vazio(mySelect_estados, '.span-select-estado')
        return
    } else {
        vazio(mySelect_estados, '.span-select-estado')
    }



    
})



