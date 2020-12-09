// const input = document.querySelectorAll('.container__form-input[id=fname]');
// const errorTxt = document.querySelector('.errorText');
// const userName = document.querySelector('.name');
// for(let item of [...input]) {
//     item.onblur = function() {
//         errorTxt.style.display = 'block';
//     };
//     item.onfocus = function() {
//         errorTxt.style.display = 'none';
//     }
//     item.onchange = function() {
//         userName.textContent = item.value;
//         item.value = '';
//     };
// }
//
// const title = document.querySelector('.wrapper-title');
// title.addEventListener('click', (e) => {
//     if(e.target.textContent === 'Personal'){
//         e.target.textContent = 'Персональная информация';
//     } else {
//         e.target.textContent = 'Personal';
//     };
// });
//
// const btnForm = document.querySelector('.container__form-button');
// const clsPopup = document.querySelector('.clsPopup');
// const popup = document.querySelector('.popup');
// btnForm.addEventListener('click', (e) => {
//     console.log(e);
//     popup.style.display = 'block';
// });
// clsPopup.addEventListener('click', (e) => {
//     e.preventDefault();
//     popup.style.display = 'none';
// });
//
// const table = document.querySelector('.container__table-personal');
// const tableMoreInfo = document.querySelector('.table-more-popup');
// const closeTable = document.querySelector('.close-table');
// table.addEventListener('mouseover', (e) => {
//     tableMoreInfo.style.display = 'block';
// });
// closeTable.addEventListener('click', () => tableMoreInfo.style.display = 'none');
//
//
// const color = [
//     '#808080',
//     '#778899',
//     '#708090',
//     '#D3D3D3',
//     '#f5f5ff',
// ];
// const list = document.querySelector('.container__list');
// list.addEventListener('mousemove', () => {
//     try {
//         list.style.background = color[(Math.floor(Math.random() * color.length))];
//     } catch (e) {
//         const errorText = document.querySelector('.error');
//         errorText.textContent = 'Либо массив пуст, либо отсутствует';
//     }
// });
//
// // 5 итерация
//
// class User {
//     constructor(name, age, isFrontendDeveloper, skills, additionalSkills) {
//         this.name = name;
//         this.age = age;
//         this.isFrontendDeveloper = isFrontendDeveloper;
//         this.skills = skills;
//         this.additionalSkills = additionalSkills;
//     }
//
//     setAdditionalSkills(...params) {
//         for(let item of params) {
//             this.additionalSkills.push(item);
//         }
//     }
//
//     setName (name = 'User Name') {
//         this.name = name;
//     }
//
//     getName () {
//         console.log(`Здравствуйте, ${this.name}`);
//     }
//
// }
//
// class Subuser extends User{
//     constructor(name, age, isFrontendDeveloper, skills, additionalSkills, workPlace) {
//         super(name, age, isFrontendDeveloper, skills, additionalSkills);
//         this.workPlace = workPlace;
//     }
//     genNameSubuser() {
//         return super.getName();
//     }
// }
// const subuser = new Subuser(
//     'Ivan',
//     26,
//     true,
//     {
//         HTML: true,
//         CSS: true,
//         PHP: true,
//         JavaScript: true,
//         Vue: true,
//         Angular: false,
//         React: false,
//     },
//     [
//         'GIT',
//         'Jira',
//     ],
//     'Apple',
//     );
// subuser.getName();
//
// const user = new User(
//     'Sergey',
//     23,
//     true,
//     {
//         HTML: true,
//         CSS: true,
//         PHP: true,
//         JavaScript: true,
//         Vue: true,
//         Angular: false,
//         React: false,
//     },
//
//     [
//         'GIT',
//         'Jira',
//     ]
// );
// console.log(User.prototype.__proto__);
//
// const {name, age, skills} = user;
// console.log(name, age, skills);
//
// function* skillsDev() {
//     for(let item of Object.keys(skills)) {
//         yield item;
//     }
// }
// const skill = skillsDev();
// const skillArr = [];
// for(let item of skill) {
//     skillArr.push(item);
// }
//
// console.log(skillArr);
//
// // 6 итерация
//
// title.addEventListener('click', () => alert('Сейчас изменится текст')); //alert
//
// console.log(location.href); //Получение текущего урла
//
// console.log(history.state);//получение текущего элемента истории
//
// const toTable = document.querySelector('.toTable');
// toTable.addEventListener('click', (e) => {
//     e.preventDefault();
//     history.pushState(null, null, 'table.html'); // Добавление элемента в историю
//     history.go(0);
// });
//
// document.cookie = 'senla=my-cookie; max-age=60'; // Установка куки
//
// sessionStorage.setItem('test', JSON.stringify({
//     name: 'Test',
//     age: 20,
// }));
//
// const obj = {
//     name: 'Alex',
//     age: 20,
// };
//
//
// debugger;
//
// localStorage.setItem('person', JSON.stringify(obj));
//
// const personString = localStorage.getItem('person');
// const person = JSON.parse(personString);
// person.name = 'Sergey';
//
// console.log(person);
//
// window.addEventListener('storage', event => {
//     console.log(event);
// });


// 7 итерация

// ****** Получение данных через Promise ****** //

function getGitRepo(login) {
    return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${login}/repos`)
                .then(response => response.json())
                .then(projects => resolve(projects))
                .catch(err => reject(err))
    })
}
getGitRepo('SerejaTrapecija')
    .then(proj => proj.forEach(item => console.log('Название проекта:', item.name)))
    .catch(err => console.log('Какая-то ошибка'));

// ****** Получение данных через Promise ****** //

// ****** Получение данных через ASYNC / AWAIT ****** //

async function getGitRepoAsync(login) {
    try {
        const response = await fetch(`https://api.github.com/users/${login}/repos`)
        const data = await response.json()
        data.forEach(item => console.log('Проект:', item.name));
    } catch (err) {
        console.error('Ошибка');
    }
}
getGitRepoAsync('SerejaTrapecija')

// ****** Получение данных через ASYNC / AWAIT ****** //

