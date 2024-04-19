const text = document.getElementById("span_auto_imcrement");
const array_text_about_header = ['Desenvolvedor Front-end','Front-end Developer','Desenvolvedor Front-end','Front-end Developer'];

const hamburguer = document.getElementById(`hamburguer`);
const list_full = document.getElementById("list-full");
const button_nav = document.querySelector(".button-nav");

const link_navgation = document.querySelectorAll(".link-navgation")

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
typed(text, array_text_about_header);




hamburguer.addEventListener("click", ()=> {
    hamburguer.classList.toggle("active")
    list_full.classList.toggle("active")

})



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


