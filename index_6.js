// ..........1----В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// window.onload = function () { //onload- проверяет загрузку страницы
//     console.log('страница загрузилась');
// }


// ............или
// window.addEventListener('load', () => { //load- проверяет загрузку страницы
//     console.log('страница загрузилась');
// })
// document.querySelector('#myButton').onclick = function () {//onclick-- по кликам
//     console.log('Событие по клику');
// }
// document.querySelector('#myButton').addEventListener('click', function () {//число кликов и сообщение
//     console.log('Событие по эвенту');
// })


// ............. 2 Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”


// document.getElementById('button1').onclick = function () {
//     console.log('click 1');
// }
// document.getElementById('button2').onclick = function () {
//     console.log('click 2');
// }
// document.getElementById('button3').onclick = function () {
//     console.log('click 3');
// }
// let counter = 0;
// document.getElementById('button4').onclick = function () {
//     counter++;
//     console.log(`click ${counter}`);
// }
// const btn = document.getElementById('button5');
// btn.addEventListener('click', function () {
//     btn.innerText = 'Вы нажали';
// });
// .....or
// document.getElementById('button5').addEventListener('click', function () {
//     this.innerText = 'Вы нажали';
// });


// ...........3--Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// document.querySelector('#add').addEventListener('click', addHeading);
// document.querySelector('#remove').addEventListener('click', removeHeading);
// document.querySelector('#hover').addEventListener('mouseover', hoverBtn);
// document.querySelector('#hover').addEventListener('mousout', hoverBtnOut);



// function addHeading() {//добавляем заголовок
//     const heading = document.createElement('h1');
//     heading.textContent = 'Новый загаловак';
//     document.body.appendChild(heading);//помещаем заголовок в тело документа
// }


// function removeHeading() {//удаляем заголовок
//     const heading = document.querySelector('h1');
//     if (heading) {//если есть heading --- то мы его удаляем
//         heading.remove();
//     }
// }


// function hoverBtn() {//наведение на кнопку
//     console.log('Вы навели на кнопку');

// }


// function hoverBtnOut() {//убрали курсор
//     console.log('Вы убрали курсор');

// }



// ....................4----Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

document.querySelector('#add').addEventListener('click', addList);//присвоить функцию по клику
document.querySelector('#remove').addEventListener('click', removeEl);//присвоить функцию по клику
document.querySelector('#addClass').addEventListener('click', addClass);//присвоить функцию по клику
// ......or-----
// document.querySelector('#addClass').addEventListener('click', function ddClass() {
//     this.classList.add('click')
// });//присвоить функцию по клику


function addList() {
    const list = document.querySelector('.list');
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент';
    list.appendChild(newItem);
}


function removeEl() {
    const list = document.querySelector('.list');
    if (list.firstElementChild) {
        list.firstElementChild.remove();
    }
}


function addClass() {
    this.classList.add('click');//classList--обращение к классовым селекторам
}