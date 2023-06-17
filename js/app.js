const navLinks = document.querySelector('.links')
const hamBurger = document.querySelector('.hamburgerbtn')
const toggleImg = document.querySelector('#toggle-img')

hamBurger.addEventListener('click', () => {
    navLinks.classList.toggle('open')

    isOpen = navLinks.classList.contains('open')

    if (isOpen) {
        toggleImg.src = './assets/shared/mobile/close.svg'
    } else {
        toggleImg.src = './assets/shared/mobile/menu.svg'
    }
})