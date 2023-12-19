const theme = localStorage.getItem('theme')
const buttonTheme = document.getElementById('theme')
const buttonThemeTwo = document.getElementById('theme-two')
const body = document.body

function toggle() {
    document.body.classList.toggle('dark')
}

if(theme === 'dark') {
    body.classList.add('dark')
} else {
    body.classList.remove('dark')
}

buttonTheme.addEventListener('click', ()=> {
    if(body.classList.contains('dark')) {
        localStorage.setItem('theme', 'white')
    } else {
        localStorage.setItem('theme', 'dark')
    }
    toggle()
})
buttonThemeTwo.addEventListener('click', ()=> {
    if(body.classList.contains('dark')) {
        localStorage.setItem('theme', 'white')
    } else {
        localStorage.setItem('theme', 'dark')
    }
    toggle()
})

// document.body.addEventListener('keypress', (event) => {
//     if (event.key == 'Enter') {
//         menu.classList.remove('active')
//         navMenu.classList.remove('active') 
        
//         if(navMenu.classList.contains('active')) {
//             hamb.forEach(elemnt => {
//                 elemnt.style.backgroundColor = '#000'
//             });
//         } else {
//             hamb.forEach(elemnt => {
//                 elemnt.style.backgroundColor = '#fff'
//             });
//         }
//       }
//     })