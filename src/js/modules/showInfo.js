export default class ShowInfo{
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.plusContent = document.querySelectorAll('.plus__content');

    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const sibling = btn.closest('.module__info-show').nextElementSibling;
                if (sibling.classList.contains('fadeIn')) {
                    sibling.style.display = 'none';
                    sibling.classList.remove('animated', 'fadeIn');
                    btn.firstElementChild.remove();
                    btn.innerHTML = `
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.16699 1.00033C5.16699 0.540088 5.54009 0.166992 6.00033 0.166992C6.46056 0.166992 6.83366 0.540088 6.83366 1.00033V11.0003C6.83366 11.4606 6.46056 11.8337 6.00033 11.8337C5.54009 11.8337 5.16699 11.4606 5.16699 11.0003V1.00033Z" fill="white"/>
                        <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"/>
                    </svg>`;
                } else {
                    sibling.style.display = 'block';
                    sibling.classList.add('animated', 'fadeIn');
                    btn.firstElementChild.remove();
                    btn.innerHTML = `
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"/>
                    </svg>`;
                }
            }); 
        });
    }
}