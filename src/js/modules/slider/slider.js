export default class Slider {
    constructor({ container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate = false,
        autoplay = false } = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
    
    
}

























// const slider = () => {
//     const page = document.querySelector('.page'),
//         btns = document.querySelectorAll('.next'),
//         hanson = document.querySelector('.hanson');
//     let slides = page.children,
//         slideIndex = 1;
    
//     const wrapper = document.querySelectorAll('.sidecontrol');

    
//     wrapper.forEach(elem => {
//         elem.firstElementChild.addEventListener('click', () => {
//             changeSlide(-1);
//             if(slideIndex < 1) {
//                 slideIndex = slides.length;
//                 showSlide();
//             }
//             showSlide();
//         });
//     });
    
    
    
    
//     hanson.style.display = 'none';
    
    
    
//     function showSlide() {
//         slides.forEach(slide => {
//             slide.style.display = 'none';
//             slides[slideIndex - 1].style.display = 'block';
//         });
//     }
    
//     showSlide();

//     function changeSlide(n) {
//         slideIndex = slideIndex + n;
//     }

//     btns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             hanson.style.display = 'none';
//             changeSlide(1);
//             if (slideIndex > slides.length) {
//                 slideIndex = 1;
//             }
//             if (slideIndex === 3) {
//                 setTimeout(() => {
//                     hanson.style.display = 'block';
//                 }, 3000);
//             }
//             showSlide();
            

            
            
//             console.log(slideIndex);
            
//         }); 
//     });

    





// };

// export default slider;
