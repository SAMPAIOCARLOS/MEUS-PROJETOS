const list_sections = document.querySelectorAll("#ul_list_sections li");
const scroll_bar = document.getElementById("scroll_bar");

const group_tech = document.getElementById("group-tech");
const group_course = document.getElementById("group-course");
const group_certificate = document.getElementById("group-certificate");

const link_ver_todos_fun = document.getElementById("link_ver_todos_fun")


list_sections.forEach(li_item => {

    li_item.addEventListener("click", () => {
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



async function Get_data_course(container_main_course) {
    try {
        const response = await fetch("../dados/data_card_course.json");
        const data = await response.json();

        data.forEach(array_card => {
            const card = document.createElement("div");
            card.classList.add("swiper-slide");

            const header_card_course = document.createElement("div");
            header_card_course.classList.add("header_card_course");

            const box_logo_company = document.createElement("div");
            box_logo_company.classList.add("box_logo_company");

            const img_box_logo_company = document.createElement("img");
            img_box_logo_company.src = array_card.company_icon;

            const name_company = document.createElement("p");
            name_company.classList.add("name_company");
            name_company.innerText = array_card.company_name;

            const title_course = document.createElement("div");
            title_course.classList.add("title_course");

            const h1_title_course = document.createElement("h1");
            h1_title_course.innerText = array_card.company_name;

            const box_img_front_course = document.createElement("div");
            box_img_front_course.classList.add("box_img_front_course");

            const img_box_img_front_course = document.createElement("img");
            img_box_img_front_course.src = array_card.url_front_img

            const box_description_course = document.createElement("div");
            box_description_course.classList.add("box_description_course");

            const P_box_description_course = document.createElement("p");
            P_box_description_course.innerText = array_card.company_description;

            const footer_icons_tech = document.createElement("div");
            footer_icons_tech.classList.add("footer_icons_tech");

            container_main_course.append(card);
            card.append(header_card_course, title_course, box_img_front_course, box_description_course, footer_icons_tech)
            header_card_course.append(box_logo_company, name_company)
            box_logo_company.append(img_box_logo_company)
            title_course.append(h1_title_course)
            box_img_front_course.append(img_box_img_front_course)
            box_description_course.append(P_box_description_course)
            
            const icons_techs = array_card.icons_tech
            
            for (let i = 0; i < icons_techs.length; i++) {
                const element = icons_techs[i];
                let icon_tech = document.createElement("p");
                icon_tech.innerHTML = element;

                footer_icons_tech.append(icon_tech);
            }

        });

    } catch (error) {

    }
}


async function Get_data_certificate(container_main_certificate) {
    const response = await fetch("../dados/data_links_certificate.json");
    const data = await response.json()


    data.forEach(array_certificate => {
        // console.log(array_certificate)
    });
}

