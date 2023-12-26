const h1_header = document.getElementById('h1-header');
const P_bottom_input = document.getElementById('P-bottom-input');
const link_header = document.getElementById('link-header');
const h3_servicos = document.getElementById('h3-servicos');
const Pservis_Credenciamento = document.getElementById('Pservis-Credenciamento');
const Pservis_Serviço = document.getElementById('Pservis-Serviço');
const h3_publicacoes = document.getElementById('h3-publicacoes');
const h3_destaques = document.getElementById('h3-destaques');
const text_interno_img = document.getElementById('text-interno-img');
const paragrafo_interno_img = document.getElementById('paragrafo-interno-img');

const text_card_whats_1 = document.getElementById('text-card-whats-1');
const text_card_whats_2 = document.getElementById('text-card-whats-2');
const text_card_whats_3 = document.getElementById('text-card-whats-3');
const text_card_whats_4 = document.getElementById('text-card-whats-4');

const h3_noticias = document.getElementById('h3-noticias');
const list_item_portal = document.getElementById('list-item-portal');
const list_item_E_SIC = document.getElementById('list-item-E-SIC');
const list_item_e_OUV = document.getElementById('list-item-e-OUV');
const button_webmail = document.getElementById('button-webmail');
const button_versao_anterior = document.getElementById('button-versao-anterior');
const paragrafo_footer_infor = document.getElementById('paragrafo-footer-infor');
const text_end = document.getElementById('text-end');
const text_end_strong = document.getElementById('text-end-strong');

let button_EN = document.getElementById('toggle_EN')
let button_FR = document.getElementById('toggle_FR')
let button_ES = document.getElementById('toggle_ES')
let button_PT = document.getElementById('toggle_PT')

function atualizarIdioma(idioma, data) {
    h1_header.innerText = data[idioma].h1_header;
    P_bottom_input.innerText = data[idioma].P_bottom_input;
    h3_servicos.innerText = data[idioma].h3_servicos;
    Pservis_Credenciamento.textContent = data[idioma].Pservis_Credenciamento

    document.documentElement.lang = idioma;
}



// Função para atualizar os elementos de texto com base no idioma


// Adiciona um evento de clique para o botão de inglês (EN)
button_EN.addEventListener('click', (event) => {
    event.preventDefault();

    const idiomaAtual = document.documentElement.lang;
    if (idiomaAtual === 'pt') {
            novoIdioma = 'en';
        } else {
            novoIdioma = 'pt';
        }

    fetch('idiomas.json')
        .then((res) => res.json())
        .then((data) => {
            atualizarIdioma(novoIdioma, data);
        })
        .catch((error) => console.error('deu ruim', error));
});






// button_EN.addEventListener('click', (event)=> {
//     event.preventDefault()

//     const idiomaAtual = document.documentElement.lang;
//     let novoIdioma;

//     if (idiomaAtual === 'pt') {
//         novoIdioma = 'en';
//     } else {
//         novoIdioma = 'pt';
//     }

//     fetch('idiomas.json').then((res)=> {
//         res.json()
//         .then((data)=> {
//             h1_header.innerText = data[novoIdioma].h1_header
//             P_bottom_input.innerText = data[novoIdioma].P_bottom_input

//             document.documentElement.lang = novoIdioma;

//         })
//     })
// })