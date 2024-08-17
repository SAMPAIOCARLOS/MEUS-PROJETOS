const container_list_header_dedicated = document.getElementById("container_list_header_dedicated");
const container_list_footer_dedicated = document.getElementById("container_list_footer_dedicated");
const container_list_header_two_dedicated = document.getElementById("container_list_header_two_dedicated");

const hamburguer_menu_tech_dedicated = document.getElementById("hamburguer_menu_tech_dedicated");
const list_full_two_dedicated = document.getElementById("list_full_two_dedicated");

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Obtém o ID do projeto da URL
const projectId = getQueryParam('id');


async function Get_data_content_project() {
    
    try {
        const response = await fetch("../dados/data_content_projects.json");
        const data = await response.json();


        const card = data.find(p => p.id == projectId);
        if (!card) return window.location.href = '../index.html'

        console.log(card)


        const title_head = document.querySelector(".title_head");
        title_head.innerText = card.title_head;

        const title_main_dedicated = document.querySelector(".title_main_dedicated");
        title_main_dedicated.innerText = card.title_project_header;

        const data_project = document.querySelector(".data_project");
        data_project.innerText = card.date_project;

        const img_main_project = document.querySelector(".img_main_project");
        img_main_project.src = card.img_project;

        const list_tech_project_dedicated = document.getElementById("list_tech_project_dedicated");

        const icons_techs_project = card.icons_tech_project

        for (let i = 0; i < icons_techs_project.length; i++) {
            const element = icons_techs_project[i];
            let icon_tech_project = document.createElement("li");
            icon_tech_project.innerHTML = element;
            list_tech_project_dedicated.append(icon_tech_project);
        }

        const description_project = document.querySelector(".description_project");
        description_project.innerText = card.description_about_project;

        const link_project = document.querySelector(".link_project");
        link_project.href = card.link_project;

        const link_repository = document.querySelector(".link_repository");
        link_repository.href = card.link_repository;


    } catch (error) {
        
    }


}


document.addEventListener("DOMContentLoaded", ()=> {
    create_link_header(container_list_header_dedicated, obj_menu_header);
    create_link_header(container_list_footer_dedicated, obj_menu_header);
    create_link_header(container_list_header_two_dedicated, obj_menu_header)
    Get_data_content_project();
    Active(hamburguer_menu_tech_dedicated, list_full_two_dedicated)
})