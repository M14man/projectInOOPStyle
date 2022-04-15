import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/videoPlayer';
import MiniSlider from './modules/slider/slide-mini';
import Difference from './modules/difference';
import Form from './modules/forms';
// import form from './modules/form';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    const slider = new MainSlider({btns: '.next', container: '.page' });
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();


    const videoPlayer = new VideoPlayer('.showup .play', '.overlay');
    videoPlayer.init();

    const differenceFirst = new Difference('.officerold', '.officer__card-item');
    differenceFirst.init();
    const differenceSecond = new Difference('.officernew', '.officer__card-item');
    differenceSecond.init();

    new Form('form').init();


    // form('[name="email"]');



});


