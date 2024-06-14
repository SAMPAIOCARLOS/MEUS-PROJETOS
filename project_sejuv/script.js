const list_full = document.querySelector(".list-full")
const line_span = document.querySelector(".line-span")
const hamb = document.querySelectorAll('.hamburguer span');
const hamburguer = document.querySelector(".hamburguer")
const width = 1175


function trocarImagem() {
        const larguraTela = window.innerWidth;
        const imagem_one = document.getElementById('imagem_center_one');

        if (larguraTela < width) {
            imagem_one.src = 'imgs/Ativo 6teste.png';
        } else {
            imagem_one.src = 'imgs/Ativo 7teste.png';
        }

        
    }

    // function trocarImagemTwo() {
    //     const larguraTela = window.innerWidth;

    //     let imagem_two = document.getElementById('imagem_center_two');

    //     if (larguraTela < width) {
    //         imagem_two.src = 'imgs/Ativo 6teste.png';
    //     } else {
    //         imagem_two.src = 'imgs/Ativo 7teste.png';
    //     }

        
    // }
    // window.onload = trocarImagem;
    // window.onresize = trocarImagem;

    


    function Active(Menu_hamburguer, list_full, line_span) {
        Menu_hamburguer.addEventListener("click", ()=> {
            Menu_hamburguer.classList.toggle("active")
            list_full.classList.toggle("active")
            line_span.classList.toggle("active")

            if (line_span.classList.toggle(".active")) {
                hamb.forEach(elemnt => {
                    elemnt.style.backgroundColor = '#000'
                });
            } else {
                hamb.forEach(elemnt => {
                    elemnt.style.backgroundColor = '#fff'
                });
            }
            
        })
    }

    

    Active(hamburguer, list_full, line_span)
