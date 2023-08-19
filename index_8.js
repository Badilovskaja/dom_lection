// ...............1--задание
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const checkbox = document.querySelector('#agree');
// const submitBtn = document.querySelector('#submit');

// submitBtn.addEventListener('click', function (e) {
//     const div = document.createElement('div');

//     if (!checkbox.checked) {
//         div.textContent = 'Вы не согласились';
//         div.style.color = 'red';
//     } else {
//         div.textContent = 'Вы согласились';
//         div.style.color = 'пкуут';
//     }
//     document.querySelector('body').parentNode.appendChild(div);
// });


// .................2-задание
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const teabtn = document.querySelector('input[value="tea"]');
// const coffebtn = document.querySelector('input[value="coffe"]');
// const submitbtn = document.querySelector('#submit');

// submitbtn.addEventListener('click', function (e) {
//     if (teabtn.checked) {
//         alert('Чай закончился');
//     } else if (coffebtn.checked) {
//         alert('Кофе закончился');
//     }
// });


// ////...................3--задание
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const passwordField = document.querySelector('#password-field');
// const submitBTN = document.querySelector('#submit');
// // const message = document.querySelector('#message');
// const form = document.querySelector('form');


// form.addEventListener('submit', function (event) {
//     event.preventDefault();//остановит по умолчанию применяем с формой
//     if (passwordField.value === 'пароль') {
//         // message.getElementsByClassName.color = 'green';
//         // message.textContent = 'Пароль верный';
//         passwordField.style.borderColor = 'green';
//         passwordField.style.borderWidth = '3px';

//         passwordField.setCustomValidity('пароль верный');//всплывающее окно
//         passwordField.reportValidity();//Вызываем

//     } else {
//         // message.getElementsByClassName.color = 'red';
//         // message.textContent = 'Пароль неверный';
//         passwordField.style.borderColor = 'red';
//         passwordField.style.borderWidth = '3px';
//         passwordField.setCustomValidity('пароль не верный');//всплывающее окно
//         passwordField.reportValidity();//Вызываем
//     }
// });


// .....................4-задача
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const input = document.querySelector('#input');

const changeHeader = () => {
    const header = document.querySelector('h1');
    header.innerText = input.value;//присваиваем свойство
}

input.addEventListener('input', changeHeader);//input'-1 аргумент, changeHeader - 2 аргумент)


// .........или
// const input = document.querySelector('#input');
// input.addEventListener('input', (event) => {//рисуем елку
//     const value = event.target.value;
//     console.log(value);
// });

