/* Массив является особенным, если каждый четный индекс содержит четное число,
а каждый нечетный индекс содержит нечетное число. Создайте функцию, которая
возвращает true, если массив является специальным, и false в противном случае. */

function isSpecialArray(arr) {
    
}

isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) // true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) // false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) // false

// Index 3 has an even number 8.
