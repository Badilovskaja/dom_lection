// < !--1-----------задание
//   --- Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
//     Цвет текста синий
//     Рамка сплошная черная
//     Цвет фона #f8f8f8
//     Внутренний отступ 16px
//     Добавить данному блоку класс item_1(использовать setAttribute)-- >

// ..................решение
// const block = document.querySelector('.block');
// const itemDiv = document.createElement('div');
// itemDiv.classList.add('item');//добавляем класс
// itemDiv.innerHTML = '<span>элемент внутри</span>';//itemDiv.textContent = 'элемент внутри';-- отображает все текстом, <span>- строчная стилистика?  ---------innerHTML---все тэги не отображаются
// block.appendChild(itemDiv);//appendChild-метод, itemDiv-аргумент, в родительский див помещаем дочерний и теперь мы его видим
// console.log(itemDiv.style);// выводим див с cтилями


// // таблица стилей
// itemDiv.style.color = 'blue';
// itemDiv.style.border = '1px solid black';
// itemDiv.style.width = '400px';
// itemDiv.style.backgroundColor = '#f8f8f8';
// itemDiv.style.padding = '16px';

// // добавим класс через атрибут --setAttribute
// block.setAttribute('class', 'block item_1');//'class',----1 атрибут какой добавляем  'block item_1'---2 атрибут что присваиваем , два класса чтобы они вместе отображались



// ...........2 задание
// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// ..........решение
// const textElem = document.querySelector('.text');

// Вывести в консоль картинку
// const img = document.querySelector('img');
// console.log(img);

// Вывести в консоль соседний элемент h2
// console.log(textElem.parentNode);
// console.log(textElem.parentElement);

// Вывести в консоль родительский элемент content
// const content = document.querySelector('.content');
// const contentElem = content.parentNode;
// console.log(contentElem);

// ....или// Вывести в консоль родительский элемент content
// const elem = textElem.closest('.elem');// textElem.-указываем точку откуда ити,   closest---- идет вверх по дереву и будет применен до того момента пока не встретит первый div или класс .elem или хоть до body
// console.log(elem);

// Вывести в консоль соседний элемент h2
// console.log(textElem.previousElementSibling);//previousElementSibling-- ищет соседний элемент


// ..............3 -задача
/* <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей */


// ..................решение
// const h2 = document.querySelector('h2');
// const parentElement = [];//создаем элемент и присвоим ему масив
// let parent = h2.parentNode;//создаем элемент и присвоим ему родителей

// while (parent !== null) {//пока parent не равен null делаем
//     parentElement.push(parent);//parentElement--впихиваем push(parent)
//     parent = parent.parentNode;

// }
// console.log(parentElement);


// ...............4------задача
/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным */


// ..............решение
// создаем для всего константу
// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const btn = document.querySelector('.btn');

// // рисуем горку
// // input.addEventListener('input', (event) => {
// //     const value = event.target.value;
// //     console.log(value);
// // })

// // onclick
// function clickBtn() {//функцич по нажатию
//     if (input.value === '') {//если input не заполнен пустая строка
//         const errorMessage = document.createElement('h2');//создаем сообщение
//         errorMessage.textContent = 'Вы не заполнили поле';//в нем пишем
//         errorMessage.style.border = '2px solid red';//выводим в рамке
//         form.appendChild(errorMessage)//присваиваем чтобы видеть
//     }
// }


// ..............или  решение
// создаем для всего константу
const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

form.addEventListener('submit', (event) => {
    // console.log(event.type);//запускаем чтобы узнать тип event
    // console.log(event.target);//запускаем чтобы узнать с каким тэгом будем взаимодействовать
    event.preventDefault();//предотвратить отправку формы по умолчанию
    const errorMessage = document.createElement('h2');//создаем сообщение
    if (input.value.trim() === '') {//если форма пустая, не заполнена--trim()---игнорит пробелы по краям

        errorMessage.textContent = 'Вы не заполнили поле';//в нем пишем
        errorMessage.style.border = '2px solid red';//выводим в рамке

    } else {

        errorMessage.textContent = 'Вы заполнили поле';//в нем пишем
        errorMessage.style.border = '2px solid green';//выводим в рамке

    }
    form.appendChild(errorMessage)//присваиваем чтобы видеть
    setTimeout(() => {//метод для исчезновения сообщения через 1 секунды
        errorMessage.remove();
    }, 1000)//1 секунды вторая константа
})







