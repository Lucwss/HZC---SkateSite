const MenuBottom = document.querySelector('.header-menu')
const SideMenu = document.querySelector('.side-menu')

MenuBottom.addEventListener('click', () => {
    SideMenu.classList.toggle('side-menu-appear')
})