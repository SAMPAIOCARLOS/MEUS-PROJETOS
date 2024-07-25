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


    try {
        const response = await fetch("../dados/data_links_certificate.json");
        const data = await response.json()


    data.forEach(array_certificate => {
        const link_container_certificate = document.createElement("a");
        link_container_certificate.setAttribute("target", "blank")
        link_container_certificate.classList.add("link_container_certificate");
        link_container_certificate.href = array_certificate.link_certificate;

        const card_link_certificate = document.createElement("div");
        card_link_certificate.classList.add("card_link_certificate");

        const box_img_tech_certificate = document.createElement("div");
        box_img_tech_certificate.classList.add("box_img_tech_certificate");

        const img_tech_certificate = document.createElement("img");
        img_tech_certificate.src = array_certificate.icon_tech_certificate;

        const container_description_certificate = document.createElement("div");
        container_description_certificate.classList.add("container_description_certificate");

        const title_certificate = document.createElement("h1");
        title_certificate.innerText = array_certificate.title_certificate;

        const line_break = document.createElement("hr");

        const description_certificate = document.createElement("p")
        description_certificate.innerText = array_certificate.description_certificate;


        container_main_certificate.append(link_container_certificate);
        link_container_certificate.append(card_link_certificate);
        card_link_certificate.append(box_img_tech_certificate, container_description_certificate);
        box_img_tech_certificate.append(img_tech_certificate);
        container_description_certificate.append(title_certificate, line_break, description_certificate)



    });


    } catch (error) {
        
    }
    
}


async function Get_data_card_project(container_card_project) {
    const response = await fetch("../dados/data_cards_projects.json");
    const data = await response.json();

    data.forEach(array_data_project => {

        const link_page_dedicated = document.createElement("a");
        link_page_dedicated.classList.add("link_page_dedicated");
        link_page_dedicated.setAttribute("target", "black")
        link_page_dedicated.href = array_data_project.link_page_dedicated

        const card_project = document.createElement("div");
        card_project.classList.add("card_project");

        const box_img_card_project = document.createElement("div");
        box_img_card_project.classList.add("box_img_card_project");

        const img_project = document.createElement("img");
        img_project.src = array_data_project.img_project

        const container_description_projects = document.createElement("div");
        container_description_projects.classList.add("container_description_projects");

        const title_project = document.createElement("h1");
        title_project.innerText = array_data_project.title_project;

        const description_project = document.createElement("p");
        description_project.innerText = array_data_project.description_project;

        const footer_icons_tech_project = document.createElement('ul');
        footer_icons_tech_project.classList.add("container_tech_used_project");


        link_page_dedicated.append(card_project);

        container_card_project.append(link_page_dedicated);
        card_project.append(box_img_card_project, container_description_projects);
        box_img_card_project.append(img_project);
        container_description_projects.append(title_project, description_project, footer_icons_tech_project);


        const icons_techs_project = array_data_project.container_icons_tech_project

        console.log(icons_techs_project)

            for (let i = 0; i < icons_techs_project.length; i++) {
                const element = icons_techs_project[i];
                let icon_tech_project = document.createElement("li");
                icon_tech_project.innerHTML = element;
                footer_icons_tech_project.append(icon_tech_project);
            }

        
    });
}

