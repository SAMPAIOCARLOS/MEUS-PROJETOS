const border = document.getElementById("border")
const link_navgation = document.querySelectorAll(".link-navgation")



link_navgation.forEach(element => {
    element.addEventListener("click", (event)=> {


        switch (element.innerText) {
            case "TECNOLOGIAS":
                // alert("tecnologias") 
                border.style.margin = '0'
                border.style.width = '35%'
                document.getElementById("container-tecnologias").style.display = 'flex'
                document.getElementById("container-cursos").style.display = 'none'
                document.getElementById("container-certificados").style.display = 'none'
                break;
        
            case "CURSOS":
                // alert("cursos")
                border.style.marginLeft = '35%'
                border.style.width = '30%'
                document.getElementById("container-cursos").style.display = 'flex'
                document.getElementById("container-tecnologias").style.display = 'none'
                document.getElementById("container-certificados").style.display = 'none'
                break

            case "CERTIFICADOS":
                // alert("certificados")
                border.style.marginLeft = '65%'
                border.style.width = '35%'
                document.getElementById("container-certificados").style.display = 'flex'
                document.getElementById("container-cursos").style.display = 'none'
                document.getElementById("container-tecnologias").style.display = 'none'
                

                break
            default:

            alert("se lascar")
                break;
        }

    })
});

const container_tech = document.getElementById("container-tech")

fetch("../dados/dadosIcons.json").then((res)=> {
    return res.json()

}).then((data)=> {
    console.log(data)

    data.forEach(element => {
        const newAside = document.createElement("aside")
        newAside.setAttribute('class', 'box-icon')

        const newP = document.createElement("p")
        newP.innerText = element.name
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'box-icon-img')

        const newImg = document.createElement("img")
        newImg.src = element.icon

        container_tech.append(newAside)
        newAside.append(newP, newDiv)
        newDiv.append(newImg)
        
    });
})