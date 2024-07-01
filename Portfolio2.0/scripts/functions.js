const text = document.getElementById("span_auto_imcrement");
const array_text_about_header = ['Desenvolvedor Front-end','Front-end Developer','Desenvolvedor Front-end','Front-end Developer'];

const hamburguer = document.querySelector(`.hamburguer`);
const list_full = document.querySelector(".list-full");
const button_nav = document.querySelector(".button-nav");



const data_atual = new Date()
const ano_atual = data_atual.getFullYear()
const nascimento = "2005"
const spans_age = document.querySelectorAll(".span-age")

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


function Calc_age(Ano_atual, Data_nascimento) {
    const idade = Ano_atual - Data_nascimento

    console.log(`minha idade é ${idade}`)

    spans_age.forEach(span_age => {
        span_age.innerText = idade
    });


}

function Active(Menu_ham, list_full) {
    Menu_ham.addEventListener("click", ()=> {
        Menu_ham.classList.toggle("active")
        list_full.classList.toggle("active")
    })
}

const trasition_left = document.querySelectorAll(".trasition-left")
const trasition_right = document.querySelectorAll(".trasition-right")
const trasition_appear = document.querySelectorAll(".trasition-appear")

function Intersecting(list, classe) {
    
    const myObserver = new IntersectionObserver((fun)=> {
        fun.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classe)
            } else {
                entry.target.classList.remove(classe)
            }
        });
    })

    list.forEach(element => {
        myObserver.observe(element)
    });
}




document.addEventListener(`DOMContentLoaded`, ()=>{
    Intersecting(trasition_left, 'trasition-left-show')
    Intersecting(trasition_right, 'trasition-right-show')
    Intersecting(trasition_appear, 'trasition-appear-show')
    typed(text, array_text_about_header);
    Active(hamburguer, list_full);
    Calc_age(ano_atual, nascimento);
})


