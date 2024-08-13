let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.menu');

window.onscroll = () => {
    sections.forEachtop = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEachlinks
        links.classList.remove('active');
        document.querySelector('nav div a[href*=' + id + ']').classList.add('active');
    }
}
