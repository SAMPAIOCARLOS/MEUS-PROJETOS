const buttons = document.querySelectorAll('.toggle-theme')
const body = document.body
const input_pesquisar = document.getElementById('pesquisar')
const header = document.getElementById("header")

const buttonsBigger = document.querySelectorAll('.button-Bigger')
const buttonsSmaller = document.querySelectorAll('.button-Smaller')

const theme = localStorage.getItem('theme')

function toggle_theme() {
    body.classList.toggle('dark')

    body.classList.toggle('theme-transition')

    setTimeout(()=> {
        body.classList.remove('theme-transition')
    },500)
}

function toggleHeader() {
    if(header.classList.contains('fundo-header')) {
        header.classList.remove('fundo-header')
        header.style.backgroundImage = 'var(--fundo--header)'
        localStorage.setItem('bottom', 'one_bottom')
    }else {
        header.classList.add('fundo-header')
        header.style.backgroundImage = 'var(--fundo--header)'
        localStorage.setItem('bottom', 'two_bottom')
    }
}

function zoomin() {
    body.style.zoom = '140%'
}
function zoomout() {
    body.style.zoom = '100%'
}

if(theme === 'dark') {
    body.classList.add('dark')
} 


buttons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        if(body.classList.contains('dark')) {
            localStorage.setItem('theme', 'white')
        } else {
            localStorage.setItem('theme', 'dark')
        }

        toggle_theme()
    })
});


buttonsBigger.forEach(btnzoomin => {
    btnzoomin.addEventListener('click', ()=> {
        zoomin()
    })
})

buttonsSmaller.forEach(btnzommout => {
    btnzommout.addEventListener('click', ()=> {
        zoomout()
    })
})

document.getElementById('close').addEventListener('click', ()=> {
    input_pesquisar.value = ''
})

window.onload = () => {
    const fundoSalvo = localStorage.getItem('bottom');
    if (fundoSalvo === 'two_bottom') {
      header.classList.add('fundo-header');
    }

    toggleHeader()
  }









