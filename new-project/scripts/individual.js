const form = document.getElementById('form')
const nome = document.getElementById('name')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const conf_email = document.getElementById('conf-email')
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
        validarName(nome, '.span-name')
        return
    } else {
       validarName(nome, '.span-name')
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

    if(email.value === conf_email.value) {
        conf_email.style.border = 'none'
        document.querySelector('.span-conf-email').style.display = 'none'
    } else {
        conf_email.style.border = '1px solid rgb(186, 0, 0)'
        document.querySelector('.span-conf-email').style.display = 'block'
        return
    }


    let valorCampo = data_hora.value;
    let dataHora = new Date(valorCampo);

    if (dataHora < new Date()) {
        data_hora.style.border = '1px solid rgb(186, 0, 0)'
        document.getElementById('campo-data').innerText = 'Você tem que selecionar uma data maior que a atual!'
        return 
    }

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
    
   const body = `<p>
        <strong style="color: #555;">Nome:</strong> <span id="nome" style="color: #777; font-weight: bold;"></span>
    </p>

    <p>
        <strong style="color: #555;">Telefone:</strong> <span id="telefone" style="color: #777;">${telefone.value}</span>
    </p>

    <p>
        <strong style="color: #555;">Email:</strong> <span id="email" style="color: #777;"></span>
    </p>

    <p>
        <strong style="color: #555;">Data:</strong> <span id="data" style="color: #777;"></span>
    </p>`

    fetch('', {
        body: JSON.stringify({
            author_email: email.value,
            subject: 'Agendamento Individual',
            body,
        })
    })
})


document.addEventListener("DOMContentLoaded", ()=> {
    isTelefoneValue()
});


