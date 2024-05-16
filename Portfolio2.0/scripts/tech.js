const page_tech_container = document.getElementById("page-tech-container")

const hamburguer_menu_tech = document.getElementById("hamburguer_menu_tech")
const list_full_two = document.getElementById("list_full_two")

async function GetDataTechSpecific(page_tech_container_fun) {
    try {
        const res = await fetch("../dados/dadosIcons.json")
        const data = await res.json()


        data.forEach(Dado => {
            const page_tech_box_icon = document.createElement("div")
            page_tech_box_icon.setAttribute("class", "page-tech-box-icon")

            const name_tech_page_tech = document.createElement("p")
            name_tech_page_tech.setAttribute("class", "name_tech_page-tech")
            name_tech_page_tech.innerText = Dado.fullName

            const container_img_page_tech = document.createElement("div")
            container_img_page_tech.setAttribute("class", "container-img-page-tech")

            const img = document.createElement("img")
            img.setAttribute("class", "img_teste")
            img.src = Dado.icon

            const desc_page_tech = document.createElement("p")
            desc_page_tech.setAttribute("class", "desc_page_tech")
            desc_page_tech.innerText = Dado.description


            page_tech_container_fun.appendChild(page_tech_box_icon)
            page_tech_box_icon.append(name_tech_page_tech, container_img_page_tech, desc_page_tech)
            container_img_page_tech.append(img)
    
        });

    } catch (error) {
        alert("deu ruim!")
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    GetDataTechSpecific(page_tech_container)
    Active(hamburguer_menu_tech, list_full_two)
})

