/*
#### Zadanie 1
Napisz funkcję ```getNumber```, która ma przyjmować dwa argumenty &ndash;
 liczbę i tablicę. Funkcja ta ma zwracać wartość true lub false, w zależności
  od tego czy podana liczba znajduje się w tablicy czy nie.

```JavaScript
getNumber(2, [33, 54, 2, 1, 4, 100]);// => true
getNumber(5, [33, 54, 2, 1, 4, 100] );// => false
```
 */

function getNumber(number, array) {
    const anyNumber = array.some(function (element) {
        return element === number;
    });
    console.log(anyNumber)
}


getNumber(2, [33, 54, 2, 1, 4, 100]);
getNumber(5, [33, 54, 2, 1, 4, 100]);

/*
#### Zadanie 2
Napisz funkcję ```createIdentityMatrix```, która przyjmuje jako argument liczbę całkowitą ```rows```.
 Niech funkcja **zwraca** tablicę 2-wymiarową. Niech tablica wygląda w następujący sposób:

```JavaScript
createIdentityMatrix(4,4);
//=>[ [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1] ];
 ```
Jest to tak zwana macierz jednostkowa, czyli taka, która ma na przekątnej jedynki.
Macierz posiada tyle samo rzędów ile kolumn.
Musisz użyć pętli zagnieżdżonych.
Pamiętaj o tym, że tablica ta ma zostać zwrócona przez funkcję inaczej zadanie będzie nie zaliczone.
 */

function createIdentityMatrix(rows) {
    const array = [];

    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < rows; j++) {
            if (array[i] === array[j]) {
                array[i][j] = 1;
            } else array[i][j] = 0;
        }
    }
    return print2DArray(array);
}

createIdentityMatrix(4);
createIdentityMatrix(7);
createIdentityMatrix(10);

function print2DArray(array) {
    let row = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            row += array[i][j] + " ";
        }
        console.log("[" + [i] + "] = [" + row + "]");
        row = "";
    }
}

/*
#### Zadanie 3
Za pomocą konstruktora stwórz funkcję ```Tree```. Niech funkcja ta ma jedną właściwość ```type```,
 która będzie przechowywać typ drzewa.
Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.

Dopisz do konstruktora również metodę ```bloom()```, która będzie zwracała tekst "I'm blooming".
Sprawdź za pomocą metody ```hasOwnProperty()```, czy metoda ta została stworzona dla każdej instancji osobno?
 Jeśli tak zoptymalizuj kod dodając ją do prototypu funkcji ```Tree```.
 */

const Tree = function (type) {
    this.type = type;

};

Tree.prototype.bloom = function () {
    console.log("I'm blooming say " + this.type)
}

const dab = new Tree("dab");
const klon = new Tree("klon");
const wisnia = new Tree("wisnia");
console.log(dab.hasOwnProperty(dab.bloom))
console.log(dab.hasOwnProperty(klon.bloom))
console.log(dab.hasOwnProperty(wisnia.bloom))
dab.bloom();
klon.bloom();
wisnia.bloom();

/*
#### Zadanie 1 - dodatkowe
Napisz funkcję ```addTheSameNumbers```, która ma przyjmować dwa argumenty &ndash;
 liczbę i tablicę. Funkcja ta ma zwracać sumę
wszystkich elementów tablicy,
 które są równe liczbie podanej jako pierwszy argument funkcji.
  Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć null.

```JavaScript
addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]);// => 14
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]);// => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]);// => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]);// => null
 */

function addTheSameNumbers(number, array) {
    let sum = null;
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));// => 14
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));// => 9
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));// => 0
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));// => null

/*
#### Zadanie 2 - dodatkowe
Napisz funkcję ```powers```, która ma przyjmować tylko jeden argument &ndash;
liczbę, która musi być większa od **0**. Funkcja ta ma zwracać tablicę zawierającą
kolejne potęgi podanej liczby (w kolejności malejącej) mniejsze od 200.
Jeżeli podana liczba jest mniejsza lub równa **0**, to funkcja ma zwracać pustą tablicę.

```JavaScript
powers(2);// => [ 128, 64, 32, 16, 8, 4, 2 ]
powers(5);// => [ 125, 25, 5 ]
powers(-4);// => []
```
 */

function powers(number) {
    const result = [];
    let num = 0;
    if (number <= 0) {
        return result
    } else {
        for (let i = 1; num < 200; i++) {
            num = Math.pow(number, i);
            if (num < 200) {
                result.push(num)
            }
        }
    }
    return result.sort(function (a, b) {
        return a - b
    });
}

console.log(powers(2));// => [ 128, 64, 32, 16, 8, 4, 2 ]
console.log(powers(5));// => [ 125, 25, 5 ]
console.log(powers(-4));// => []

/*
#### Zadanie 3 - dodatkowe
Napisz funkcję ```getFirstWrongElement```,
która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą rosnące liczby całkowite.
Funkcja ta ma zwracać pierwszy element tablicy, który nie jest wielokrotnością poprzedniego.
Jeżeli w tablicy wszystkie elementy są wielokrotnością poprzedniego, to funkcja ma zwracać ```null```.

```JavaScript
getFirstWrongElement([1,5,10,14,28, 84]);//=> 14
getFirstWrongElement([3,5,15,45]);// => 5
getFirstWrongElement([1, 8, 32, 128, 1024]);// => null
```
 */

