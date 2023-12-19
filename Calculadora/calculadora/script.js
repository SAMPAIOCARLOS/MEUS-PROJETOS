const valores = document.querySelectorAll('.valores')
const Pvalor = document.getElementById('Pvalor')

for (let i = 0; i < valores.length; i++) {
    const num = valores[i];
    let numero = num.innerHTML;

    num.addEventListener('click', ()=> {
        let valor = document.getElementById('Pvalor').innerHTML
        document.getElementById('Pvalor').innerHTML = `${valor + numero}`
        
    })

    
}

const Clean = document.getElementById('Clean').addEventListener('click', ()=> {
    location.reload();
})

const back = document.getElementById('back').addEventListener('click', ()=> {
    const UltimoV = document.getElementById('Pvalor').innerHTML
    document.getElementById('Pvalor').innerHTML = UltimoV.slice(0, -1)
})

const calculate = document.getElementById('calculate').addEventListener('click', ()=> {
    try {
        let calculo = document.getElementById('Pvalor').innerHTML;
        document.getElementById('Presultado').innerHTML = eval(calculo.replace('x', '*'))

        if(calculo.length < 1) {
            alert(`Insira algo para que possa fazer o calculo`)
            document.getElementById('Presultado').innerHTML = ''
        }
    } catch (error) {
        let Presult = document.getElementById('Presultado')
        Presult.innerHTML = 'Erro';
        Presult.style.backgroundColor = 'red'
        
    }

})

const theme = document.getElementById("theme").addEventListener('click', ()=> {
    document.body.classList.toggle('theme-white')
})

document.getElementById('copy').addEventListener('click', ()=> {
    navigator.clipboard.writeText(document.querySelector('#Presultado').textContent)
})