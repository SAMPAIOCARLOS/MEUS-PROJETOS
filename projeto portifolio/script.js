const myobserve = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
} )

const elements = document.querySelectorAll('.sobre-mim')

elements.forEach( (element) => myobserve.observe(element))

