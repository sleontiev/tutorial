const input = document.querySelectorAll('.container__form-input[id=fname]');
const errorTxt = document.querySelector('.errorText');
const userName = document.querySelector('.name');
for(let item of [...input]) {
    item.onblur = function() {
        errorTxt.style.display = 'block';
    };
    item.onfocus = function() {
        errorTxt.style.display = 'none';
    }
    item.onchange = function() {
        userName.textContent = item.value;
        item.value = '';
    };
}

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
    console.log(e);
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

// 5 итерация

class User {
    constructor(name, age, isFrontendDeveloper, skills, additionalSkills) {
        this.name = name;
        this.age = age;
        this.isFrontendDeveloper = isFrontendDeveloper;
        this.skills = skills;
        this.additionalSkills = additionalSkills;
    }

    setAdditionalSkills(...params) {
        for(let item of params) {
            this.additionalSkills.push(item);
        }
    }

    setName (name = 'User Name') {
        this.name = name;
    }

    getName () {
        console.log(`Здравствуйте, ${this.name}`);
    }

}

class Subuser extends User{
    constructor(name, age, isFrontendDeveloper, skills, additionalSkills, workPlace) {
        super(name, age, isFrontendDeveloper, skills, additionalSkills);
        this.workPlace = workPlace;
    }
}
const subuser = new Subuser(
    'Ivan',
    26,
    true,
    {
        HTML: true,
        CSS: true,
        PHP: true,
        JavaScript: true,
        Vue: true,
        Angular: false,
        React: false,
    },
    [
        'GIT',
        'Jira',
    ],
    'Apple',
    );
subuser.getName();

const user = new User(
    'Sergey',
    23,
    true,
    {
        HTML: true,
        CSS: true,
        PHP: true,
        JavaScript: true,
        Vue: true,
        Angular: false,
        React: false,
    },

    [
        'GIT',
        'Jira',
    ]
);
console.log(User.prototype.__proto__);

const {name, age, skills} = user;
console.log(name, age, skills);

function* skillsDev() {
    for(let item of Object.keys(skills)) {
        yield item;
    }
}
const skill = skillsDev();
const skillArr = [];
for(let item of skill) {
    skillArr.push(item);
}
console.log(skillArr);







