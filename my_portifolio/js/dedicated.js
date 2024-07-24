const container_list_header_dedicated = document.getElementById("container_list_header_dedicated");
const container_list_footer_dedicated = document.getElementById("container_list_footer_dedicated");





document.addEventListener("DOMContentLoaded", ()=> {
    create_link_header(container_list_header_dedicated, obj_menu_header);
    create_link_header(container_list_footer_dedicated, obj_menu_header);
})