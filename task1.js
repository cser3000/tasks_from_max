
let arr1 = [1, 2, 2, 2, 2, 3, 4, 5, 5, 6, false, false];

let arr2 = [2, 2, 3, 4, 4, 5, 7, 7, 8, 9, false];

// самое простое решение
/*
function intersection(a, b) {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; i < b.length; i++) {
            if (a[i] === b[j] && a[i] !== false) {
                res.push(a[i]);
                a.splice(i, 1);
                b.splice(j, 1);
                i = 0;
                j = 0;
            }
        }
    }
    return res;
}
*/


// более короткая версия
/*
function intersection(a, b) {
    return a.filter( (elem) => {
        if (b.includes(elem) && elem !== false) {
            b.splice(b.indexOf(elem), 1);
            return true;
        }
        else return false;
    });
}
*/

// через map с сохранением позиции
/*
function intersection(a, b) {
    let res;
    res = a.map( (it) => {
        if (b.includes(it) && it !== false) {
            b.splice(b.indexOf(it), 1);
            return it;
        }
        else return null;
    })
    return res;
}
*/
// через map без сохранения позиции
/*
function intersection(a, b) {
    let res;
    res = a.map( (it) => {
        if (b.includes(it) && it !== false) {
            b.splice(b.indexOf(it), 1);
            return it;
        }
    })
    return res.filter( (a) => a != null);
}
*/

// поиск индексов
/*
function intersection(a, b) {
    let res;
    // присваивает в res строку индексов нужных элементов
    res = a.reduce( (ac, it, i) => {
        if (b.includes(it) && it !== false) {
            b.splice(b.indexOf(it), 1)
            return String(ac) + String(i);
        }
        else return String(ac);
    }, '')
    // пилю строку в массив цифр и заменяю индексы значениями из a по индексу
    return res.split('').map( (item) => a[Number(item)]);
}
*/


console.log(arr1);
console.log(arr2);
console.log(intersection(arr1, arr2));