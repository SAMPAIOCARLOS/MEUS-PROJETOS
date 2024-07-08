const list_sections = document.querySelectorAll("#ul_list_sections li");
const scroll_bar = document.getElementById("scroll_bar");

const group_tech = document.getElementById("group-tech");
const group_course = document.getElementById("group-course");
const group_certificate = document.getElementById("group-certificate");

const link_ver_todos_fun = document.getElementById("link_ver_todos_fun")


list_sections.forEach(li_item => {

    li_item.addEventListener("click", ()=> {
        switch (li_item.textContent) {
            case "TECNOLOGIAS":
                scroll_bar.style.margin = "0";
                scroll_bar.style.width = "35%";

                group_tech.style.display = "flex";
                group_course.style.display = "none";
                group_certificate.style.display = "none";
                break;
    
            case "CURSOS":
                scroll_bar.style.marginLeft = "35%";
                scroll_bar.style.width = "30%";

                group_tech.style.display = "none";
                group_course.style.display = "flex";
                group_certificate.style.display = "none";
                break;

            case "CERTIFICADOS":

                scroll_bar.style.marginLeft = "65%";
                scroll_bar.style.width = "35%";
                
                group_tech.style.display = "none";
                group_course.style.display = "none";
                group_certificate.style.display = "flex";
                break;

            default:
                alert("Error");
                break;
        }
    })
    
});


async function Get_data_icons_tech(container) {
    try {
        const response = await fetch("../dados/data_icon_tech.json");
        const data = await response.json();

        if (data.length > 6) {
            data.length = 6
            link_ver_todos_fun.style.display = 'block'
        }

        data.forEach(array_icon => {

            const card_icon_tech = document.createElement("div");
            card_icon_tech.setAttribute("class", "card_icon_tech");

            const title = document.createElement("h1");
            title.innerText = array_icon.name

            const box_img_icon_tech = document.createElement("div");
            box_img_icon_tech.setAttribute("class", "box-img-icon-tech");

            const img_icon_tech = document.createElement("img");
            img_icon_tech.setAttribute("class", "img_icon_tech");
            img_icon_tech.src = array_icon.icon

            container.append(card_icon_tech)
            box_img_icon_tech.append(img_icon_tech)
            card_icon_tech.append(title, box_img_icon_tech)
            
        });
    } catch (error) {
        
    }
}

