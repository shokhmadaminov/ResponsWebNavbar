const openBtnNav = document.querySelector('.open')
const navLeft = document.querySelector('.left-navbar')



openBtnNav.addEventListener('click', function() {
    navLeft.classList.toggle('openNav')
})
