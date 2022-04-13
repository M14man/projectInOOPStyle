export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }
    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');

            }
        } catch (e) {
        }

        this.hanson.style.opacity = '0';

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            this.slides[this.slideIndex - 1].style.display = 'block';
        });


    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch (e) {
            console.log(e);
        }
        

        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });
            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
            
            
        });

        this.showSlides(this.slideIndex);
            

        
        

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
