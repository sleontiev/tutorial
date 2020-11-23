const title = document.querySelector('.wrapper-title');
title.addEventListener('click', (e) => {
    if(e.target.textContent === 'Personal'){
        e.target.textContent = 'Персональная информация';
    } else {
        e.target.textContent = 'Personal';
    };
});

const btnForm = document.querySelector('.container__form-button');
const clsPopup = document.querySelector('.clsPopup');
const popup = document.querySelector('.popup');
btnForm.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'block';
});
clsPopup.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
});

const table = document.querySelector('.container__table-personal');
const tableMoreInfo = document.querySelector('.table-more-popup');
const closeTable = document.querySelector('.close-table');
table.addEventListener('mouseover', (e) => {
    tableMoreInfo.style.display = 'block';
});
closeTable.addEventListener('click', () => tableMoreInfo.style.display = 'none');

const input = document.querySelectorAll('.container__form-input');
for(let item of [...input]) {
    item.onfocus = function() {
        console.log('Тест');
    }
}

const color = [
    '#808080',
    '#778899',
    '#708090',
    '#D3D3D3',
    '#f5f5ff',
];
const list = document.querySelector('.container__list');
list.addEventListener('mousemove', () => {
    try {
        list.style.background = color[(Math.floor(Math.random() * color.length))];
    } catch (e) {
        const errorText = document.querySelector('.error');
        errorText.textContent = 'Либо массив пуст, либо отсутствует';
    }
});



