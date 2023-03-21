var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    loop: true,
    speed: 300,
    mousewheel:{
        invert: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation:{
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev'
    }
})