var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        sensitivity: 1,
        eventTarget: ".swiper-slide",
    },
    loop: true,
    simulateTouch: false,
});
