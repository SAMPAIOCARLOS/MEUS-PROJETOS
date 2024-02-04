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


const campos_text = document.querySelectorAll('.campos_text')

campos_text.forEach(campo => {
    campo.addEventListener('keyup', (event)=> {
        const section = event.target.parentNode
        const span = section.querySelector('.span-invalido')
        const campo = section.querySelector('.campos_text')

        if(span.style.display === 'flex') {
            span.style.display = 'none'
            campo.style.border = 'none'
        }
    })

    
});



form.addEventListener('submit', (event)=> {
    event.preventDefault()

    if(nome.value.length < 3) return gerarErrorNoInput(nome, 'span-name')

    if(telefone.value.length < 15) return gerarErrorNoInput(telefone, 'span-telefone')
    
    if(!isEmailValue(email.value)) return gerarErrorNoInput(email, 'span-email')

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
    const htmlData = `<p><strong>Nome:</strong> ${nome.value}</p><p><strong>Email:</strong> ${email.value}</p><p><strong>Telefone:</strong> ${telefone.value}</p><p><strong>Data:</strong> ${schedulingDate}</p>`

    const formButton = document.querySelector('.Button-enviar')
    formButton.disabled = true
    formButton.innerHTML = `<img src='../img/image.gif' alt="" class="loading"/>`

    fetch('http://10.25.0.158:8000/scheduling', {
        method: 'POST',
        body: JSON.stringify({
            author_email: email.value,
            subject: 'Agendamento Individual',
            body: htmlData,
        })
    }).then(response => {
        formButton.innerHTML = ''
        formButton.textContent = 'Enviar'
        console.log(response)
        form.submit()
    })
    .catch(error => {
        formButton.innerHTML = ''
        formButton.textContent = 'Enviar'
    })
})


// document.addEventListener("DOMContentLoaded", ()=> {
//     isTelefoneValue()
// });



