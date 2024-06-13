function trocarImagem() {
        const larguraTela = window.innerWidth;
        let imagem_one = document.getElementById('imagem_center_one');
        let imagem_two = document.getElementById('imagem_center_two');

        if (larguraTela < 1475) {
            imagem_one.src = 'imgs/Ativo 6teste.png';
            imagem_two.src = 'imgs/Ativo 6teste.png';
        } else {
            imagem_one.src = 'imgs/Ativo 7teste.png';
            imagem_two.src = 'imgs/Ativo 7teste.png';
        }
    }

    // Trocar a imagem quando a página carregar
    window.onload = trocarImagem;

    // Trocar a imagem quando a janela for redimensionada
    window.onresize = trocarImagem;