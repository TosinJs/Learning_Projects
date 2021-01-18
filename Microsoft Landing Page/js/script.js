micro = document.querySelector('.micro')
dropdown = document.querySelector('.parent-drop')
body = document.querySelector('body')
header = document.querySelector('header')
dropElements = Array.from(document.querySelectorAll('.drop-elements'))
h4 = Array.from(document.querySelectorAll('h4'))
bars = document.querySelector('.bars')
barIcon = document.querySelector('#bars')
wrapper = document.querySelector('.wrapper-div')
form =  document.querySelector('.form')
search = document.querySelector('.search')
logo = document.querySelector('.logo')
icon1 = document.querySelector('.header-icons1')
icon2 = document.querySelector('.header-icons2')
cancel = document.querySelector('.cancel')

let showDrop = false
micro.addEventListener('click', () => {
    showDrop = !showDrop
    showDrop ? dropdown.classList.add('none') : dropdown.classList.remove('none')
})
body.addEventListener('click', (event) => {
    if(!wrapper.contains(event.target)) {
        showDrop = false
        showDrop ? dropdown.classList.add('none') : dropdown.classList.remove('none')
    }
    if(!bars.contains(event.target) && !dropdown.contains(event.target)) {
        barStatus = false
        wrapper.classList.remove('none')
        barIcon.classList.add('fa-bars')
        barIcon.classList.remove('fa-times')
    }
    if(!header.contains(event.target)) {
        showForm = false
        form.classList.remove('form-s')
        icon1.style.display= 'block'
        icon2.style.display= 'block'
        logo.style.display = 'block'
    }
})

h4.map((h, index) => {
    h.addEventListener('click', () => {
        dropElements.map((element, id) => {
            if(index === id) {
                element.classList.toggle('none')
            }
        })
    })
})

let barStatus = false

bars.addEventListener('click', () => {
    barStatus = !barStatus
    barStatus ? wrapper.classList.add('none') : wrapper.classList.remove('none')
    if(barStatus){
        barIcon.classList.remove('fa-bars')
        barIcon.classList.add('fa-times')
    }
    else{
        barIcon.classList.add('fa-bars')
        barIcon.classList.remove('fa-times')
    }
})

window.addEventListener('resize', () =>{
    win = window.innerWidth
    if(win > 826) {
        barStatus = false
        barStatus ? wrapper.classList.add('none') : wrapper.classList.remove('none') 
        if(barStatus){
            barIcon.classList.remove('fa-bars')
            barIcon.classList.add('fa-times')
        }
        else{
            barIcon.classList.add('fa-bars')
            barIcon.classList.remove('fa-times')
        }
        showDrop = false
        showDrop ? dropdown.classList.add('none') : dropdown.classList.remove('none')
    
        showForm = false
        form.classList.remove('form-s')
        icon1.style.display= 'block'
        icon2.style.display= 'block'
        logo.style.display = 'block'
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

let showForm = false
search.addEventListener(('click'), () => {
    showForm = !showForm
    if(showForm) {
        form.classList.add('form-s')
        logo.style.display = 'none'
        icon1.style.display= 'none'
        icon2.style.display= 'none'
        if(window.innerWidth > 826) {
            logo.style.display = 'block'
        }
    }
    else{
        form.classList.remove('form-s')
        icon1.style.display= 'block'
        icon2.style.display= 'block'
        logo.style.display = 'block'
    }
})
cancel.addEventListener('click', () => {
    showForm = false
    form.classList.remove('form-s')
    icon1.style.display= 'block'
    icon2.style.display= 'block'
    logo.style.display = 'block'
})

// h4.forEach(h => {
//     h.addEventListener('click', () => {
//         dropElements.forEach(element => {
//             element.style.display = 'block'
//         });
//     })
// })
