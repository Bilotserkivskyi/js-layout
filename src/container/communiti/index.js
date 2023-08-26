// ======Цей код вже був згенерований раніше, тож змінюємо заголовок і лишаємо ====

import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Ком’юніті')

page.append(title)

// ======= Додаємо main і все що всередині ==============

// Створюємо елемент <main>
const mainElement = document.createElement('main')
mainElement.classList.add('post__list')

// Створюємо елемент <nav>
const navElement = document.createElement('nav')
navElement.classList.add('nav')

// Створюємо першу кнопку
const button1 = document.createElement('button')
button1.classList.add('button', 'button__tabs--1')
button1.setAttribute('disabled', true)
button1.textContent = 'База знань'

// Створюємо другу кнопку
const button2 = document.createElement('button')
button2.classList.add('button', 'button__tabs--2')
button2.textContent = 'Інформація'

// Додаємо кнопки до <nav>
navElement.appendChild(button1)
navElement.appendChild(button2)

// Створюємо елемент <img>
const imgElement = document.createElement('img')
imgElement.src = 'img/header__img.png' // Задайте шлях до вашого зображення

// Створюємо елемент <h2> та задаємо йому текст
const h2Element = document.createElement('h2')
h2Element.textContent = 'Що таке база знань?'

// Створюємо елемент <p> та задаємо йому текст
const pElement = document.createElement('p')
pElement.textContent =
  'База знань - база даних, що містить правила виведення та інформацію про людський досвід та знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.'

// Створюємо елемент <button> та задаємо йому текст
const buttonElement = document.createElement('button')
buttonElement.classList.add('button__main')
buttonElement.textContent =
  'Перейти до ком’юніті в телеграм'

// Додаємо елементи до <main>
mainElement.appendChild(navElement)
mainElement.appendChild(imgElement)
mainElement.appendChild(h2Element)
mainElement.appendChild(pElement)
mainElement.appendChild(buttonElement)

// Отримуємо батьківський елемент <div class="page">
const pageElement = document.querySelector('.page')

// Додаємо <main> всередину <div class="page">
pageElement.appendChild(mainElement)

// ======================================================
