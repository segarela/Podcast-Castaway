'use strict'
// Бургер меню (Header)
const burger = document.querySelector('.burger_svg');
const navigation_burger = document.querySelector('.navigation_burger');
const a_cross = document.querySelector('.a_cross');

burger.addEventListener('click', () => {
    navigation_burger.classList.toggle('active')
    a_cross.classList.toggle('active')
});

// Закрытие панели по крестику
a_cross.addEventListener('click', () => {
    navigation_burger.classList.remove('active')
    a_cross.classList.remove('active')
});

const navLinks = document.querySelectorAll('a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation_burger.classList.remove('active')
    });
});

// СТРЕЛКА
const section3_a = document.querySelector('.section3__a');

section3_a.addEventListener('click', () => {
    section3_a.classList.toggle('active')
});

// INPUT
const input = document.querySelector('input');

input.addEventListener('click', () => {
    input.classList.toggle('active')
});

// Увеличение карточек
let block1__btn = document.querySelector('.block1__btn');
let block2__btn = document.querySelector('.block2__btn');
let block3__btn = document.querySelector('.block3__btn');

const section2__blocks1 = document.querySelector('.section2__blocks1');
const section2__blocks2 = document.querySelector('.section2__blocks2');
const section2__blocks3 = document.querySelector('.section2__blocks3');

block1__btn.addEventListener('click', () => {
    block1__btn.closest('.blocks').classList.toggle('active');
});

block2__btn.addEventListener('click', () => {
    block2__btn.closest('.blocks').classList.toggle('active');
});

block3__btn.addEventListener('click', () => {
    block3__btn.closest('.blocks').classList.toggle('active');
});


