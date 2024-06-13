const list_full = document.querySelector(".list-full")

const line_span = document.querySelector("line-span")

const hamburguer = document.querySelector(".hamburguer")


function trocarImagem() {
        const larguraTela = window.innerWidth;
        let imagem_one = document.getElementById('imagem_center_one');

        if (larguraTela < 1475) {
            imagem_one.src = 'imgs/Ativo 6teste.png';
        } else {
            imagem_one.src = 'imgs/Ativo 7teste.png';
        }
    }

    // Trocar a imagem quando a página carregar
    window.onload = trocarImagem;

    // Trocar a imagem quando a janela for redimensionada
    window.onresize = trocarImagem;




    function Active(Menu_hamburguer, list_full, line_span) {
        Menu_hamburguer.addEventListener("click", ()=> {
            Menu_hamburguer.classList.toggle("active")
            list_full.classList.toggle("active")
            line_span.classList.toggle("active")
    
        })
    }

    

    Active(hamburguer, list_full, line_span)
