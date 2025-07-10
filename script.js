document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');

    if (burger && mobileNav) {
        burger.addEventListener('click', function () {
            mobileNav.classList.toggle('active');
            burger.classList.toggle('active');
        });

        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileNav.classList.remove('active');
                burger.classList.remove('active');
            });
        });

        document.addEventListener('click', function (event) {
            if (!burger.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileNav.classList.remove('active');
                burger.classList.remove('active');
            }
        });
    }
});
