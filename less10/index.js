import { dataInfo } from "./data.js";

const content = document.querySelector('.content');

const data = JSON.parse(dataInfo);
// ...вытягиваем свойства от обьекта
data.forEach(({ id, url, name, ege }) => {//прописываем с чем будем работать
    const div = document.createElement('div');
    div.classList.add('.card');
    content.appendChild(div);//передаем в файл

    const idParam = document.createElement('p');
    idParam.classList.add('card-item');
    idParam.textContent = `ID ${id}`;
    div.appendChild(idParam);//передаем в файл

    const img = document.createElement('img');
    img.classList.add('card_img');
    img.src = url;
    img.width = 300;
    img.height = 300;
    div.appendChild(im);

    const title = document.createElement('h3');
    title.classList.add('who-i-am');
    title.textContent = name;
    div.appendChild(title);

    const subtitle = document.createElement('h6');
    subtitle.classList.add('card-subtitle');
    subtitle.textContent = age;
    div.appendChild(subtitle);




});