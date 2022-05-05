const trigger = document.getElementById('trigger');
const trigger2 = document.getElementById('trigger2');

function toggleMenu() {
    const nav = document.getElementById('menu-open');
    nav.classList.toggle('active');
}

function toggleMenu2() {
    const nav = document.getElementById('menu-open2');
    nav.classList.toggle('active2');
}

trigger.addEventListener('click', toggleMenu);
trigger2.addEventListener('click', toggleMenu2);