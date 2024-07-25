const container_list_header_dedicated = document.getElementById("container_list_header_dedicated");
const container_list_footer_dedicated = document.getElementById("container_list_footer_dedicated");

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Obtém o ID do projeto da URL
const projectId = getQueryParam('id');


async function Get_data_content_project() {
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




}



document.addEventListener("DOMContentLoaded", ()=> {
    create_link_header(container_list_header_dedicated, obj_menu_header);
    create_link_header(container_list_footer_dedicated, obj_menu_header);
    Get_data_content_project();
})