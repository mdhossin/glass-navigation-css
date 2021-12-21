const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', (e) => {
    const visibility = primaryNav.getAttribute('data-visiable')
    
    if(visibility === "false"){
        primaryNav.setAttribute('data-visiable', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if(visibility === 'true'){
        primaryNav.setAttribute('data-visiable', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})