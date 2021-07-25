const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    burger.addEventListener('click', () => {
        //Toogle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
        burger.classList.toggle('burger-active');
    });

}

navSlide();