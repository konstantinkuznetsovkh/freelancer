document.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

    var mySwiper = new Swiper('.swiper-container', {

        pagination: {
            el: '.projects-pagination', //класс для обертки линков слайдера
            bulletClass: 'project-bullet', //класс для линков слайдера
            bulletActiveClass: 'project-bullet-active',
            clickable: 'true' //кликабельные линки false не кликабельные
        }
    });
})