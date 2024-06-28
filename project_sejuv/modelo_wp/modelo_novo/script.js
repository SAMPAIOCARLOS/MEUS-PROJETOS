const list_full = document.querySelector(".list-full");
const line_span = document.querySelector(".line-span");
const hamb = document.querySelectorAll('.hamburguer span');
const hamburguer = document.querySelector(".hamburguer");
const imgs_center = document.querySelectorAll(".testeimg");

const button_back = document.querySelector(".button-back")

button_back.addEventListener("click", ()=> {
    window.history.back();
})

function Active(Menu_hamburguer, list_full, line_span, hamb) {
    Menu_hamburguer.addEventListener("click", ()=> {
        Menu_hamburguer.classList.toggle("active");
        list_full.classList.toggle("active");
        line_span.classList.toggle("active");

        if (line_span.classList.toggle(".active")) {
            hamb.forEach(elemnt => {
                elemnt.style.backgroundColor = '#000';
            });
        } else {
            hamb.forEach(elemnt => {
                elemnt.style.backgroundColor = '#fff';
            });
        }
        
    })
}


Active(hamburguer, list_full, line_span, hamb);
