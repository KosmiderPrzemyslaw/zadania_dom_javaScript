/*
**1. Pobranie informacji z atrybutu data:**
- Znajdź element o **id** ```#menu```,
- Stwórz funkcję ```getDataInfo(element)``` do której przekaż, jako argument, znaleziony element,
- Stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data każdego elementu **li**. Zauważ, że
elementy **li** to dzieci elementu o id ```#menu```.
- Zwróć tą tablicę.
 */

const menu = document.getElementById("menu");
console.log(menu);


function getDataInfo(element) {
    let tab = [];
    let dataSetTab = [];
    let elem;
    element = document.getElementById('menu').children;

    tab.push(element);

    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {
            elem = tab[i][j].dataset;
            dataSetTab.push(elem)
        }
    }
    return console.log(dataSetTab);

}

getDataInfo(menu);

/*
**2. Szukanie elementu po id:**
- Znajdź element o **id** ```#main-contener```.
- Stwórz funkcję ```getElementClass(element)``` do której przekaż, jako argument, znaleziony element.
- Zwróć tablicę złożoną z nazw klas tego elementu.
 */

let mainContener = document.getElementById("main-contener");
console.log(mainContener)

function getElementClass(mainContener) {
    tab = [];
    tab.push(mainContener.classList);
    return console.log(tab);
}

getElementClass(mainContener);

/*
**3. Szukanie elementu po klasie:**
- Znajdź element o **klasie** ```.pink-color```.
- Stwórz funkcję ```getElementText(element)``` do której przekaż, jako argument, znaleziony element.
- Zwróć z funkcji tekst, znajdujący się w tym elemencie
 */

let pinkColor = document.querySelector(".pink-color");

function getElementText(element) {
    return console.log(element.innerText);
}

getElementText(pinkColor);

/*
**4. Szukanie elementu po klasie:**
- Znajdź elementy o **klasie** ```.images```.
- Stwórz funkcję ```getElementAlt(element)```
* do której przekaż, jako argument, znalezione elementy.
- Stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków.
*  Pobierz te atrybuty z przekazanych jako argument elementów.
 */

let images = document.querySelectorAll('.images');
console.log(images)

function getElementAlt(element) {
    tab = [];
    element.forEach(elem => {
        tab.push(elem.alt)
    })
    return console.log(tab);
}

getElementAlt(images);

/*
**5. Szukanie elementu po klasie:**
- Znajdź elementy o **klasie** ```.my-link```.
- Stwórz funkcję ```getElementHref(element)``` do której przekaż,
*  jako argument, znalezione elementy.
- Stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków.
*  Pobierz te atrybuty z przekazanych jako argument elementów.
 */

let myLink = document.querySelectorAll('.my-link');

function getElementHref(element) {
    tab = [];
    element.forEach(elem => {
        tab.push(elem.getAttribute('href'))
    })
    return console.log(tab);
}

getElementHref(myLink);