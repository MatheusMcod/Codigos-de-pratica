const trigger = document.getElementById('trigger');
const trigger2 = document.getElementById('trigger2');
const open = document.getElementById('menu-open');
const open2 = document.getElementById('menu-open2');
const imgUp = document.getElementById('img-up');
const imgDown = document.getElementById('img-down');
const imgUp2 = document.getElementById('img-up2');
const imgDown2 = document.getElementById('img-down2');
const mobMenu = document.getElementById('menu-mob');

function menuOpen() {
    open.classList.add('active');
    imgUp.classList.add('remove');
    imgDown.classList.add('remove');
}

function menuClose() {
    open.classList.remove('active');
    imgUp.classList.remove('remove');
    imgDown.classList.remove('remove');
}

function menuOpen2() {
    open2.classList.add('active2');
    imgUp2.classList.add('remove');
    imgDown2.classList.add('remove');
}

function menuClose2() {
    open2.classList.remove('active2');
    imgUp2.classList.remove('remove');
    imgDown2.classList.remove('remove');
}

function menuMob() {
    const menu1 = document.getElementById('container-head1');
    const menu2 = document.getElementById('container-head2');

    menu1.classList.toggle('mob-active');
    menu2.classList.toggle('mob-active');
}


trigger.addEventListener('mouseover', menuOpen);
open.addEventListener('mouseover', menuOpen);
trigger.addEventListener('mouseout', menuClose);
open.addEventListener('mouseout', menuClose);
trigger2.addEventListener('mouseover', menuOpen2);
open2.addEventListener('mouseover', menuOpen2);
trigger2.addEventListener('mouseout', menuClose2);
open2.addEventListener('mouseout', menuClose2);
mobMenu.addEventListener('click', menuMob);

