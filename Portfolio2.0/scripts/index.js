const border = document.getElementById("border")
const link_navgation = document.querySelectorAll(".link-navgation")

const container_tech = document.getElementById("container-tech")
const link_ver_todos = document.querySelector(".link-ver-todos")

link_navgation.forEach(element => {
    element.addEventListener("click", (event) => {


        switch (element.innerText) {
            case "TECNOLOGIAS":
                border.style.margin = '0'
                border.style.width = '35%'
                document.getElementById("container-tecnologias").style.display = 'flex'
                document.getElementById("container-cursos").style.display = 'none'
                document.getElementById("container-certificados").style.display = 'none'

                document.querySelector(".swiper-button-next").style.setProperty('display', 'none', 'important');
                document.querySelector(".swiper-button-prev").style.setProperty('display', 'none', 'important');

                break;

            case "CURSOS":
                // alert("cursos")
                border.style.marginLeft = '35%'
                border.style.width = '30%'
                document.getElementById("container-cursos").style.display = 'flex'
                document.getElementById("container-tecnologias").style.display = 'none'
                document.getElementById("container-certificados").style.display = 'none'

                document.querySelector(".swiper-button-next").style.setProperty('display', 'flex', 'important');
                document.querySelector(".swiper-button-prev").style.setProperty('display', 'flex', 'important');
                break

            case "CERTIFICADOS":
                // alert("certificados")
                border.style.marginLeft = '65%'
                border.style.width = '35%'
                document.getElementById("container-certificados").style.display = 'flex'
                document.getElementById("container-cursos").style.display = 'none'
                document.getElementById("container-tecnologias").style.display = 'none'

                document.querySelector(".swiper-button-next").style.setProperty('display', 'none', 'important');
                document.querySelector(".swiper-button-prev").style.setProperty('display', 'none', 'important');

                break
            default:

                alert("se lascar")
                break;
        }

    })
});

async function GetDataTech(container_tech_fun, link_ver_todos_fun) {
    try {
        const res = await fetch("../dados/dadosIcons.json")
        const data = await res.json()

        if (data.length > 6) {
            // console.log("teste")
            data.length = 6
            link_ver_todos_fun.style.display = 'block'
        }

        data.forEach(element => {
            const newAside = document.createElement("aside")
            newAside.setAttribute('class', 'box-icon')
 
            
            const newP = document.createElement("p")
            newP.innerText = element.name
            const newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'box-icon-img')

            const newImg = document.createElement("img")
            newImg.src = element.icon


            container_tech_fun.append(newAside)
            newAside.append(newP, newDiv)
            newDiv.append(newImg)

        });

    } catch (error) {

    }
}

const box_cursos = document.getElementById("box-cursos");


async function GetDataCard(box_cursos_fun) {
    try {
        const response = await fetch("../dados/dadosCursos.json")
        const data = await response.json()

        data.forEach(dados_card => {

            // console.log(dados_card.icons_tech)

            //Construção de card
            const card_curso = document.createElement("aside")
            card_curso.classList.add("card-curso", "swiper-slide")

            const top_card_cursos = document.createElement("div")
            top_card_cursos.setAttribute("class", "top-card-cursos")

            const container_img_card_cursos = document.createElement("div")
            container_img_card_cursos.setAttribute("class", "container-img-card-cursos")

            const newIconCourse = document.createElement("img")
            newIconCourse.src = dados_card.icon

            const name_platform = document.createElement("p")
            name_platform.innerText = dados_card.name_platform

            const element_null = document.createElement("p")

            const box_title_card_cursos = document.createElement("div")
            box_title_card_cursos.setAttribute("class", "box-title-card-cursos")

            const course_title = document.createElement("h1")
            course_title.innerText = dados_card.Title

            const box_img_card_cursos = document.createElement("div")
            box_img_card_cursos.setAttribute("class", "box-img-card-cursos")

            const newImgCourse = document.createElement("img")
            newImgCourse.src = dados_card.img_course

            const list_tech_card_cursos = document.createElement("div")
            list_tech_card_cursos.setAttribute("class", "list-tech-card-cursos")

            const description_course = document.createElement("p")
            description_course.innerText = dados_card.description

            const border_fixed = document.createElement("div")
            border_fixed.setAttribute("class", "border-fixed")

            const tech_utilizadas = document.createElement("div")
            tech_utilizadas.setAttribute("class", "tech-utilizadas")

            const icons_techs = dados_card.icons_tech

            for (let i = 0; i < icons_techs.length; i++) {
                const element = icons_techs[i];
                let icon_tech = document.createElement("p")
                icon_tech.innerHTML = element
                // console.log(icon_tech)

                tech_utilizadas.append(icon_tech)   
            }

            box_cursos_fun.append(card_curso)
            card_curso.append(top_card_cursos, box_title_card_cursos, box_img_card_cursos, list_tech_card_cursos, border_fixed, tech_utilizadas)
            container_img_card_cursos.append(newIconCourse)
            top_card_cursos.append(container_img_card_cursos, name_platform, element_null)
            box_title_card_cursos.append(course_title)
            box_img_card_cursos.append(newImgCourse)
            list_tech_card_cursos.append(description_course)


        });

        // console.log(data)
    } catch (error) {

    }
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Permite que o Swiper ajuste o número de slides visíveis automaticamente
    spaceBetween: 10, // Espaço entre os slides em pixels
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  });


document.addEventListener(`DOMContentLoaded`, () => {
    GetDataTech(container_tech, link_ver_todos)
    GetDataCard(box_cursos)
})