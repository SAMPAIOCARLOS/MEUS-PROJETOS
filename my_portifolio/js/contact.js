const container_list_header_contact = document.getElementById("container_list_header_contact")
const container_list_footer_contact = document.getElementById("container_list_footer_contact")
const container_list_header_two_contact = document.getElementById("container_list_header_two_contact")

const hamburguer_menu_contact = document.getElementById("hamburguer_menu_contact")
const list_full_two_contact = document.getElementById("list_full_two_contact")

document.addEventListener("DOMContentLoaded", ()=> {
    Active(hamburguer_menu_contact, list_full_two_contact);

    create_link_header(container_list_header_contact, obj_menu_header);
    create_link_header(container_list_footer_contact, obj_menu_header);
    create_link_header(container_list_header_two_contact, obj_menu_header)
})