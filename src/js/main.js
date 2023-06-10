"use strict";

const partnersSwiper = new Swiper(".partners-slider-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.partners-slider-next',
        prevEl: '.partners-slider-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
        }
    }
});


const partnersLogoSwiper = new Swiper(".partners-logo-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.partners-logo-slider-next',
        prevEl: '.partners-logo-slider-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
        },
        720: {
            slidesPerView: 4,
        }
    }
});