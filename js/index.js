import UniversalCarousel from "./carousel.js";
const partnersCarousel = new UniversalCarousel('.partners', '.partners-carousel', '.partners-carousel__item', 3, 0, '.partners-arrowRight__img', '.partners-arrowLeft__img');

const burgerLinks = document.querySelector(".header-burger-nav__ul");
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains("header-burger-nav__burgerImg")) {
        burgerLinks.classList.toggle('hidden');
    } else {
        burgerLinks.classList.add('hidden');
    }
});

(() => {
    const circle = document.querySelectorAll('.ourSkills-content-progressBar__circle1');

    const radius = circle[0].r.baseVal.value;
    const circumference  = 2 * Math.PI * radius;
    
    circle.forEach( item => {
        item.style.strokeDasharray = `${circumference} ${circumference}`;
        // item.style.strokeDashoffset = circumference;
    })
    
    const setProgress = percent => {
        const offset = circumference - percent / 100 * circumference;
        circle.forEach(item => {
            item.style.strokeDashoffset = offset;
        });

        let stroke = 10;
        let animHint = setInterval ( () => {
            stroke = stroke + 10;
            console.log(stroke);

            if(stroke < (offset - 40)) {
                circle[0].style.strokeDashoffset = stroke;
            } else
            if(stroke >= (offset - 41)) {
                circle[0].style.strokeDashoffset = offset - 40;
                clearInterval(animHint);
            }
        }, 100);
        
    }
    setProgress(50);
})();


