const text = document.getElementById("span_auto_imcrement");
const array_text_about_header = ['Desenvolvedor Front-end','Front-end Developer','Desenvolvedor Front-end','Front-end Developer'];

const hamburguer = document.getElementById(`hamburguer`);
const list_full = document.getElementById("list-full");
const button_nav = document.querySelector(".button-nav");

const link_navgation = document.querySelectorAll(".link-navgation")

const data_atual = new Date()
const ano_atual = data_atual.getFullYear()
const nascimento = "2005"
const span_age = document.getElementById("span-age")

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

    span_age.innerText = idade

}

function Active(Menu_ham, list_full) {
    Menu_ham.addEventListener("click", ()=> {
        Menu_ham.classList.toggle("active")
        list_full.classList.toggle("active")
    })
}




console.log(link_navgation)

link_navgation.forEach(element => {
    element.addEventListener("click", (event)=> {
        console.log(element)



        // if(element.innerHTML === "CERTIFICADOS") {
        //     alert("certificados")
        // }

        switch (element.innerText) {
            case "CERTIFICADOS":
                alert("certificados")
                
                break;
        
            case "CURSOS":
                alert("cursos")

                break

            case "TECNOLOGIAS":
                alert("tecnologias")

                break
            default:

            alert("se lascar")
                break;
        }

    })
});

document.addEventListener(`DOMContentLoaded`, ()=>{
    typed(text, array_text_about_header);
    Active(hamburguer, list_full);
    Calc_age(ano_atual, nascimento);
})


