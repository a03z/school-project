const goTopBtn = document.getElementById('top')

const backToTop = () => {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

const trackScroll = () => {
    const scrolled = window.pageYOffset
    const coords = document.documentElement.clientHeight

    if (scrolled > coords) {
        goTopBtn.classList.add('top-show')
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('top-show')
    }
}
window.addEventListener('scroll', trackScroll)
goTopBtn.addEventListener('click', backToTop)
