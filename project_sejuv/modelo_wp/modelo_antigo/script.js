const list_full = document.querySelector(".list-full");
const line_span = document.querySelector(".line-span");
const hamb = document.querySelectorAll('.hamburguer span');
const hamburguer = document.querySelector(".hamburguer");
const imgs_center = document.querySelectorAll(".testeimg");
const width = 1175;



    

window.addEventListener('resize', ()=> {
    
    const larguraTela = window.innerWidth;

    if (larguraTela < width) {
        
        imgs_center.forEach(image => {
            image.src = 'https://estagiarios.firestoreslz.com/wp-content/uploads/2024/06/Ativo-6teste.png';
            
        });
    } else {

        imgs_center.forEach(image => {
            image.src = 'https://estagiarios.firestoreslz.com/wp-content/uploads/2024/06/Ativo-7teste.png';
        });
    }
});

    


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
