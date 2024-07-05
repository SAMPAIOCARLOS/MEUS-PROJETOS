const list_sections = document.querySelectorAll("#ul_list_sections li")
const scroll_bar = document.getElementById("scroll_bar")

const group_tech = document.getElementById("group-tech")
const group_course = document.getElementById("group-course")
const group_certificate = document.getElementById("group-certificate")


list_sections.forEach(li_item => {

    li_item.addEventListener("click", ()=> {
        switch (li_item.textContent) {
            case "TECNOLOGIAS":
                scroll_bar.style.left = "0%"
                scroll_bar.style.width = "300px"

                group_tech.style.display = "flex"
                group_course.style.display = "none"
                group_certificate.style.display = "none"
                break;
    
            case "CURSOS":
                scroll_bar.style.left = "35%"
                scroll_bar.style.width = "250px"

                group_tech.style.display = "none"
                group_course.style.display = "flex"
                group_certificate.style.display = "none"
                break

            case "CERTIFICADOS":

                scroll_bar.style.left = "64%"
                scroll_bar.style.width = "300px"
                
                group_tech.style.display = "none"
                group_course.style.display = "none"
                group_certificate.style.display = "flex"
                break

            default:
                alert("Error")
                break;
        }
    })
    
});

