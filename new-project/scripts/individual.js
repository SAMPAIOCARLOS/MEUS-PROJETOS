const form = document.getElementById('form')
const nome = document.getElementById('name')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const data_hora = document.getElementById('data_hora')



function isEmailValue(email) { 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

function isTelefoneValue() {
    telefone.addEventListener('keyup', ()=> {
             
        var apenasNumeros = telefone.value.replace(/\D/g, '');

        if (apenasNumeros.length <= 2) {
            telefone.value = apenasNumeros;
        } else if (apenasNumeros.length <= 6) {
            telefone.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2);
        } else {
            telefone.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2, 6) + '-' + apenasNumeros.slice(6);
        }
  
    });
}


form.addEventListener('submit', (event)=> {
    event.preventDefault()

    if(nome.value.length < 3) {
        nome.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-name').style.display = 'block'
        return
    } else {
        nome.style.border = 'none'
        document.querySelector('.span-name').style.display = 'none'
    }
    
    if(telefone.value.length < 11) {
        telefone.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-telefone').style.display = 'block'
        return
    } else{
        telefone.style.border = 'none'
        document.querySelector('.span-telefone').style.display = 'none'
    }

    if(email.value === '' || !isEmailValue(email.value)) {
        email.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-email').style.display = 'block'
        return
    } else {
        email.style.border = 'none'
        document.querySelector('.span-email').style.display = 'none'
    }


    let valorCampo = data_hora.value;
    let dataHora = new Date(valorCampo);

    if (!isNaN(dataHora.getTime())) {
      if (dataHora.getDay() === 1) {
        data_hora.style.border = '1px solid rgb(186, 0, 0)'
        document.getElementById('icon-data-hora').style.display = 'block'
        document.getElementById('campo-data').innerText = 'Não funcionamos as segundas-feiras!'
        return
      } 
    } else {
        data_hora.style.border = '1px solid rgb(186, 0, 0)'
        document.getElementById('icon-data-hora').style.display = 'block'
        document.getElementById('campo-data').innerText = 'Preencha este campo!'
        return
    }



    const schedulingDate = new Date(data_hora.value).toLocaleString('pt-BR', { timeZone: 'America/Sao_paulo' });

    sendEmail(email.value, 'Agendamento Individual', `
    Nome: ${nome.value}
    Telefone: ${telefone.value}
    Email: ${email.value}
    Data: ${schedulingDate}`);

    form.submit()
})


document.addEventListener("DOMContentLoaded", ()=> {
    isTelefoneValue()
});



