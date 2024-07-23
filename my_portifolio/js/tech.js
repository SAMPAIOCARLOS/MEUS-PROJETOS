const container_focus_icon_tech = document.getElementById("container_focus_icon_tech");

const hamburguer_menu_tech = document.getElementById("hamburguer_menu_tech");
const list_full_two = document.getElementById("list_full_two");

const container_list_header_tech = document.getElementById("container_list_header_tech");
const container_list_footer_tech = document.getElementById("container_list_footer_tech");
const container_list_header_two_tech = document.getElementById("container_list_header_two_tech");

async function Get_data_icons_page_focus(Container_in_cards) {
    try {
        const response = await fetch("../dados/data_icon_tech.json");
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const array_data = data[i];

            console.log(array_data)
            
            const card_in_focus = document.createElement("div");
            card_in_focus.setAttribute("class", "card_in_focus");

            const img_icon_tech_focus = document.createElement("div");
            img_icon_tech_focus.setAttribute("class", "img_icon_tech_focus");

            const tag_img = document.createElement("img");
            tag_img.src = array_data.icon

            const box_group_description_focus = document.createElement("div");
            box_group_description_focus.setAttribute("class", "box_group_description_focus");

            const title_card_focus = document.createElement("h1");
            title_card_focus.setAttribute("class", "title_card_focus");
            title_card_focus.innerText = array_data.fullName;

            const one_line = document.createElement("hr");

            const description_card_focus = document.createElement("p");
            description_card_focus.setAttribute("class", "description_card_focus");
            description_card_focus.innerText = array_data.description;

            const two_line = document.createElement("hr");

            const status_card_focus = document.createElement("p");
            status_card_focus.setAttribute("class", "status_card_focus");
            status_card_focus.innerText = array_data.status


            Container_in_cards.append(card_in_focus);
            card_in_focus.append(img_icon_tech_focus, box_group_description_focus);
            img_icon_tech_focus.append(tag_img);
            box_group_description_focus.append(title_card_focus, one_line, description_card_focus, two_line, status_card_focus)

        }

        // console.log(data)
    } catch (error) {
        
    }
}




document.addEventListener("DOMContentLoaded", ()=> {
    Get_data_icons_page_focus(container_focus_icon_tech);
    Active(hamburguer_menu_tech, list_full_two);

    create_link_header(container_list_header_tech, obj_menu_header);
    create_link_header(container_list_footer_tech, obj_menu_header);
    create_link_header(container_list_header_two_tech, obj_menu_header)
})



