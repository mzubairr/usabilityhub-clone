const toggle = document.getElementById('nav-toggle');
const navlinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    navlinks.classList.toggle('active');
})