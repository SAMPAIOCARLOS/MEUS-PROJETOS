const buttons = document.querySelectorAll('.toggle-theme')
const body = document.body
const input_pesquisar = document.getElementById('pesquisar')

const buttonsBigger = document.querySelectorAll('.button-Bigger')
const buttonsSmaller = document.querySelectorAll('.button-Smaller')

const theme = localStorage.getItem('theme')

function toggle_theme() {
    body.classList.toggle('dark')
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




