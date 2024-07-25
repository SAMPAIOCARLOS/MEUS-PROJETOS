const list_full = document.querySelector(".list-full");
const line_span = document.querySelector(".line-span");
const hamb = document.querySelectorAll('.hamburguer span');
const hamburguer = document.querySelector(".hamburguer");
const container_icon = document.getElementById("container_icon");
const swiper_wrapper = document.querySelector(".swiper-wrapper");
const container_certificates = document.getElementById("container_certificates");
const container_cards_projects = document.getElementById("container_cards_projects");

const text = document.getElementById("auto_complete");
const array_text_about_header = ['Desenvolvedor Front-end','Front-end Developer','Desenvolvedor Front-end','Front-end Developer'];

const data_atual = new Date();
const ano_atual = data_atual.getFullYear();
const nascimento = "2005";
const spans_age = document.querySelectorAll(".span-age");


const obj_menu_header = [
    {
        "name_menu": "INÍCIO",
        "link_navigation": "../index.html#section_start",
        "id": 1
    },
    {
        "name_menu": "SOBRE",
        "link_navigation": "../index.html#section-about",
        "id": 2
    },
    {
        "name_menu": "HABILIDADES",
        "link_navigation": "../index.html#section-skills",
        "id": 3
    },
    {
        "name_menu": "PROJETOS",
        "link_navigation": "../index.html#section-project",
        "id": 4
    }
]

const container_list_header = document.getElementById("container_list_header");
const container_list_footer = document.getElementById("container_list_footer");
const container_list_header_two = document.getElementById("container_list_header_two");


function create_link_header(container_links, obj) {
    
    for (const element of obj) {

        const link_tag_a = document.createElement("a");
        link_tag_a.classList.add("link_nav_sections");
        link_tag_a.href = element.link_navigation;

        const item_li = document.createElement("li");
        item_li.innerText = element.name_menu;


        link_tag_a.append(item_li);
        container_links.append(link_tag_a);
        
    }
}


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



function Calc_age(Ano_atual, Data_nascimento) {
    const idade = Ano_atual - Data_nascimento;

    console.log(`minha idade é ${idade}`);

    spans_age.forEach(span_age => {
        span_age.innerText = idade;
    });


}

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            775: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});

document.addEventListener("DOMContentLoaded", ()=> {
    typed(text, array_text_about_header);
    Active(hamburguer, list_full, line_span, hamb);
    Get_data_icons_tech(container_icon);
    Get_data_course(swiper_wrapper);
    Get_data_certificate(container_certificates);
    Get_data_card_project(container_cards_projects)
    Calc_age(ano_atual, nascimento);
    create_link_header(container_list_header, obj_menu_header);
    create_link_header(container_list_footer, obj_menu_header);
    create_link_header(container_list_header_two, obj_menu_header);
})
