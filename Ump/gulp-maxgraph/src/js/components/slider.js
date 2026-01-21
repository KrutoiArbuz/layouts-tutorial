import { auto } from '@popperjs/core';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
Swiper.use([Navigation, Scrollbar]);


const swiper1 = new Swiper('.slider1', {
    slidesPerView: auto,
    spaceBetween: 20,

    scrollbar: {
        el: ".scroll1",
        draggable: true,
    },

});
const swiper2 = new Swiper('.slider2', {
    slidesPerView: auto,
    spaceBetween: 20,

    scrollbar: {
        el: ".scroll2",
        draggable: true,
    },

});