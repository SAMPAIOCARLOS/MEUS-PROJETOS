const text = document.getElementById("span_auto_imcrement")
const array_text_about_header = ['Desenvolvedor Front-end','Front-end Developer','Desenvolvedor Front-end','Front-end Developer']
//Biblioteca typed. js

function typed(id, array) {
    const typed = new Typed(id, {
        strings: array,
        typeSpeed: 80, //tempo para os caracteres serem escritos
        backSpeed: 40, //tempo para os caracteres serem apagados
        cursorChar: "|", //O simbolo que aparece no final
        loop: true //Para ficar se repetindo infinitamente
    })
}



typed(text, array_text_about_header)


const hamburguer = document.getElementById(`hamburguer`)
const list_full = document.getElementById("list-full")


hamburguer.addEventListener("click", ()=> {
    hamburguer.classList.toggle("active")
    list_full.classList.toggle("active")
})


