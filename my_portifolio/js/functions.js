const list_full = document.querySelector(".list-full");
const line_span = document.querySelector(".line-span");
const hamb = document.querySelectorAll('.hamburguer span');
const hamburguer = document.querySelector(".hamburguer");

const container_icon = document.getElementById("container_icon")

const text = document.getElementById("auto_complete");
const array_text_about_header = ['Desenvolvedor Front-end','Front-end Developer','Desenvolvedor Front-end','Front-end Developer'];


function Active(Menu_hamburguer, list_full, line_span, hamb) {
    Menu_hamburguer.addEventListener("click", ()=> {
        Menu_hamburguer.classList.toggle("active");
        list_full.classList.toggle("active");
        line_span.classList.toggle("active");
        
    })
}

function typed(id, array) {
    const typed = new Typed(id, {
        strings: array,
        typeSpeed: 80, //tempo para os caracteres serem escritos
        backSpeed: 40, //tempo para os caracteres serem apagados
        cursorChar: "|", //O simbolo que aparece no final
        backDelay: 1000, //O tempo antes de apagar o texto
        loop: true //Para ficar se repetindo infinitamente
    })
}


document.addEventListener("DOMContentLoaded", ()=> {
    typed(text, array_text_about_header)
    Active(hamburguer, list_full, line_span, hamb);

    Get_data_icons_tech(container_icon)
})
